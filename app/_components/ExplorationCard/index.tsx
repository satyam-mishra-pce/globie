import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAppKit, useAppKitAccount } from '@reown/appkit/react';
import { Wallet } from 'lucide-react';

interface ExplorationCardProps {
    title: string;
    image: string;
    isActive?: boolean;
    gameId: string;
}

const DESCRIPTIONS: Record<string, string> = {
    monuments: "Embark on a global journey to discover iconic monuments. Navigate the world map, locate historical landmarks, and learn fascinating stories about these architectural marvels.",
    volcanoes: "Venture into the world of active volcanoes. Explore these geological wonders, understand their power, and discover the dramatic landscapes they create.",
    islands: "Journey to paradise islands around the globe. Experience pristine beaches, crystal-clear waters, and unique cultures that make each island special.",
    deserts: "Explore the world's most mysterious deserts. Discover vast sand dunes, ancient civilizations, and the incredible adaptations of desert life.",
    waterfalls: "Chase the world's most majestic waterfalls. Experience the raw power of nature, find hidden cascades, and learn about their geological formation."
};

const ExplorationCard: React.FC<ExplorationCardProps> = ({ title, image, isActive = false, gameId }) => {
    const {isConnected } = useAppKitAccount();
    const { open } = useAppKit();

    const renderButton = () => {
        if (!isConnected) {
            return (
                <Button 
                    className="w-full bg-white/90 hover:bg-white text-black rounded-full flex items-center justify-center gap-2"
                    onClick={(e) => {
                        e.preventDefault();
                        open();
                    }}
                >
                    <span>Connect Wallet to Explore</span>
                    <Wallet className="w-5 h-5" />
                </Button>
            );
        }

        return (
            <Button 
                className="w-full bg-white/90 hover:bg-white text-black rounded-full"
            >
                Start Exploring
            </Button>
        );
    };

    return (
        <Link 
            href={isConnected ? `/explore/${gameId}` : '#'} 
            className={`block transition-all duration-300 ${isActive ? 'scale-105' : 'scale-95 opacity-70'}`}
            onClick={(e) => {
                if (!isConnected) e.preventDefault();
            }}
        >
            <Card className="relative overflow-hidden rounded-3xl p-0">
                <div className="relative w-full h-[400px] overflow-hidden rounded-3xl">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 450px) 100vw, 450px"
                        priority={isActive}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-8">
                        <h2 className="text-white text-3xl font-bold mb-4">{title}</h2>
                        <p className="text-gray-200 text-sm mb-6 line-clamp-3">
                            {DESCRIPTIONS[gameId]}
                        </p>
                        {isActive && renderButton()}
                    </div>
                </div>
            </Card>
        </Link>
    );
};

export default ExplorationCard; 