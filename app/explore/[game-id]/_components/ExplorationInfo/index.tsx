"use client";
import React from 'react'
import { useGlobeData } from '../../_contexts/globe-data';
import { Home, HelpCircle, MapPin, ArrowRight, CheckCircle2, Clock, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import useMapStore from '../Map/store';
import { REQUIRED_ZOOM_LEVEL } from '../Map/config';
import HowToExplore from '../HowToExplore';
import Link from 'next/link';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

const LOCATE_TIMEOUT_SECONDS = 10;

const ExplorationInfo = () => {
    const { data, currentSiteData, setCurrentSiteIndex } = useGlobeData();
    const { isLocationFound, setLocationFound } = useMapStore();
    const [showHelp, setShowHelp] = React.useState(true);
    const [showHint, setShowHint] = React.useState(false);
    const [timeRemaining, setTimeRemaining] = React.useState(LOCATE_TIMEOUT_SECONDS);
    const [canLocate, setCanLocate] = React.useState(false);

    React.useEffect(() => {
        // Reset timer when moving to a new location
        if (!isLocationFound) {
            setTimeRemaining(LOCATE_TIMEOUT_SECONDS);
            setCanLocate(false);
            
            const timer = setInterval(() => {
                setTimeRemaining((prev) => {
                    if (prev <= 1) {
                        clearInterval(timer);
                        setCanLocate(true);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [isLocationFound, currentSiteData]);

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
                // Set location as found after flying to it
                setTimeout(() => {
                    setLocationFound(true);
                }, 2000); // Same duration as the flyTo animation
            }
        }
    };

    const getButtonContent = () => {
        if (isLocationFound) {
            if (isLastSite) {
                return (
                    <>
                        <span>Completed</span>
                        <CheckCircle2 className="w-5 h-5 ml-2" />
                    </>
                );
            }
            return (
                <>
                    <span>Next</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                </>
            );
        }
        if (!canLocate) {
            return (
                <>
                    <span>Locate in {timeRemaining}s</span>
                    <Clock className="w-5 h-5 ml-2 animate-pulse" />
                </>
            );
        }
        return (
            <>
                <span>Locate</span>
                <MapPin className="w-5 h-5 ml-2" />
            </>
        );
    };

    return (
        <div className='flex flex-col gap-2 justify-between'>
            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2 sticky top-0 border-b pb-4">
                    <div className="flex items-center justify-between w-full">
                        <Link href="/">
                        <Button variant="ghost" size="icon">
                            <Home />
                        </Button>
                        </Link>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="icon" onClick={() => setShowHint(true)}>
                            <Lightbulb className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" onClick={() => setShowHelp(true)}>
                            <HelpCircle className="h-4 w-4" />
                        </Button>
                    </div>
                    </div>
                        <span className="font-bold text-lg ml-2">{data.title}</span>
                </div>
                <div className="p-4">
                    <div className="flex flex-col gap-2">
                        <span className="font-bold text-xl">{currentSiteData.name}</span>
                        <span className="text-sm text-gray-500">{currentSiteData.description}</span>
                        <Image src={currentSiteData.image} alt={currentSiteData.name} width={300} height={300} className="border border-border rounded-2xl" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col p-4 gap-2">
                <Button 
                    className={`w-full rounded-full ${isLocationFound ? 'bg-green-500 hover:bg-green-600' : ''} flex items-center justify-between`}
                    onClick={handleLocate}
                    disabled={(isLocationFound && isLastSite) || (!isLocationFound && !canLocate)}
                >
                    {getButtonContent()}
                </Button>
                {!isLocationFound && !canLocate && (
                    <p className="text-sm text-center text-muted-foreground animate-pulse">
                        Try to find {currentSiteData.name} on the map! Use the hint if you need help.
                    </p>
                )}
            </div>

            <Dialog open={showHint} onOpenChange={setShowHint}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Hint for {currentSiteData.name}</DialogTitle>
                    </DialogHeader>
                    <p className="text-muted-foreground">{currentSiteData.hint}</p>
                </DialogContent>
            </Dialog>

            <HowToExplore open={showHelp} onOpenChange={setShowHelp} />
        </div>
    )
}

export default ExplorationInfo