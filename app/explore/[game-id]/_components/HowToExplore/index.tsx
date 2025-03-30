"use client";
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useGlobeData } from '../../_contexts/globe-data';

interface HowToExploreProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const HowToExplore = ({ open, onOpenChange }: HowToExploreProps) => {
    const { data } = useGlobeData();

    if (!data) return null;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>How to Explore</DialogTitle>
                    <DialogDescription className="space-y-4 pt-4">
                        <p>Welcome to {data.title}! Here&apos;s how to play:</p>
                        <ol className="list-decimal list-inside space-y-2">
                            <li>Read about the monument and find its location on the map</li>
                            <li>Click the marker when you find it</li>
                            <li>Need help? Click the &quot;Locate&quot; button to see where it is</li>
                            <li>Click &quot;Next&quot; to find the next monument</li>
                        </ol>
                        <div className="pt-4">
                            <Button onClick={() => onOpenChange(false)} className="w-full">
                                Got it!
                            </Button>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default HowToExplore; 