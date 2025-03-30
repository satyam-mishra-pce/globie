import React, { use } from 'react'
import MapboxMap from './_components/Map';
import ExplorationInfo from './_components/ExplorationInfo';
import { GlobeDataProvider } from './_contexts/globe-data';
import getGlobeData from './_utils/get-globe-data';
import { notFound } from 'next/navigation';
const Page = ({ params }: { params: Promise<{ "game-id": string }> }) => {
  const { "game-id": gameId } = use(params);
  const explorationData = getGlobeData(gameId);

  if (!explorationData) {
    return notFound();
  }

  return (
    <GlobeDataProvider data={{
      data: explorationData,
      currentSiteData: explorationData.sites[0],
    }}>
    <div className="h-full min-h-screen grid grid-cols-[300px_1fr] p-2 gap-2">
      <ExplorationInfo />
      <div className="h-full w-full">

      <MapboxMap />
      </div>
      </div>
    </GlobeDataProvider>
  );
}

export default Page