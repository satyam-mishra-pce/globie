"use client";
import React from 'react'
import { useGlobeData } from '../../_contexts/globe-data';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import useMapStore from '../Map/store';
import { REQUIRED_ZOOM_LEVEL } from '../Map/config';

const ExplorationInfo = () => {
    const { data, currentSiteData, setCurrentSiteIndex } = useGlobeData();
    const { isLocationFound, setLocationFound } = useMapStore();

    if (!data || !currentSiteData) {
        return <div>No data found</div>;
    }

    const handleLocate = () => {
        if (isLocationFound) {
            // Move to next site
            const nextIndex = (data.sites.findIndex(site => site.name === currentSiteData.name) + 1) % data.sites.length;
            setCurrentSiteIndex(nextIndex);
            setLocationFound(false);
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
                <div className="flex flex-col sticky top-0 border-b pb-4">
                    <Button variant="ghost" size="icon">
                        <Home />
                    </Button>
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

            <div className="flex flex-col p-4">
                <Button 
                    className={`w-full rounded-full ${isLocationFound ? 'bg-green-500 hover:bg-green-600' : ''}`}
                    onClick={handleLocate}
                >
                    {isLocationFound ? 'Next' : 'Locate'}
                </Button>
            </div>
        </div>
    )
}

export default ExplorationInfo