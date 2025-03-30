import React from 'react';
import ExplorationCarousel from './_components/ExplorationCarousel';

export default function Home() {
    return (
        <main className="min-h-screen bg-black text-white py-16">
            <div className="max-w-[1400px] mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-4 font-mono">Explore the World</h1>
                <p className="text-center text-lg text-gray-400 mb-16 font-mono">Choose a category to start your exploration</p>
                <ExplorationCarousel />
            </div>
        </main>
    );
}
