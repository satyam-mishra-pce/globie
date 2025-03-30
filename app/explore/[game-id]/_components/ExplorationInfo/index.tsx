"use client";
import React from 'react'
import { useGlobeData } from '../../_contexts/globe-data';
import { Home, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import useMapStore from '../Map/store';
import { REQUIRED_ZOOM_LEVEL } from '../Map/config';
import HowToExplore from '../HowToExplore';
import Link from 'next/link';
const ExplorationInfo = () => {
    const { data, currentSiteData, setCurrentSiteIndex } = useGlobeData();
    const { isLocationFound, setLocationFound } = useMapStore();
    const [showHelp, setShowHelp] = React.useState(true);

    if (!data || !currentSiteData) {
        return <div>No data found</div>;
    }

    const currentIndex = data.sites.findIndex(site => site.name === currentSiteData.name);
    const isLastSite = currentIndex === data.sites.length - 1;

    const handleLocate = () => {
        if (isLocationFound) {
            if (!isLastSite) {
                // Move to next site
                setCurrentSiteIndex(currentIndex + 1);
                setLocationFound(false);
            }
        } else {
            // Show location
            const map = useMapStore.getState().map;
            if (map) {
                map.flyTo({
                    center: [currentSiteData.location.longitude, currentSiteData.location.latitude],
                    zoom: REQUIRED_ZOOM_LEVEL,
                    duration: 2000
                });
            }
        }
    };

    return (
        <div className='flex flex-col gap-2 justify-between'>
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between sticky top-0 border-b pb-4">
                    <div className="flex items-center">
                        <Link href="/">
                        <Button variant="ghost" size="icon">
                            <Home />
                        </Button>
                        </Link>
                        <span className="font-bold text-lg ml-2">{data.title}</span>
                    </div>
                    <Button variant="outline" size="icon" onClick={() => setShowHelp(true)}>
                        <HelpCircle className="h-4 w-4" />
                    </Button>
                </div>
                <div className="p-4">
                    <div className="flex flex-col gap-2">
                        <span className="font-bold text-xl">{currentSiteData.name}</span>
                        <span className="text-sm text-gray-500">{currentSiteData.description}</span>
                        <Image src={currentSiteData.image} alt={currentSiteData.name} width={300} height={300} className="border border-border rounded-2xl" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col p-4">
                <Button 
                    className={`w-full rounded-full ${isLocationFound ? 'bg-green-500 hover:bg-green-600' : ''}`}
                    onClick={handleLocate}
                    disabled={isLocationFound && isLastSite}
                >
                    {isLocationFound ? (isLastSite ? 'Completed' : 'Next') : 'Locate'}
                </Button>
            </div>

            <HowToExplore open={showHelp} onOpenChange={setShowHelp} />
        </div>
    )
}

export default ExplorationInfo