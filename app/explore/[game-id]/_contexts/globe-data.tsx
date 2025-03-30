"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { ExplorationDataItem, ExplorationSite } from "../_utils/get-globe-data";

type GlobeData = ExplorationDataItem;

type GlobeDataContextType = {
    data: GlobeData | null;
    currentSiteData: ExplorationSite | null;
    setCurrentSiteIndex: (index: number) => void;
}

const GlobeDataContext = createContext<GlobeDataContextType>({
    data: null,
    currentSiteData: null,
    setCurrentSiteIndex: () => {},
});

export const GlobeDataProvider = ({data, children} : {
    data: Omit<GlobeDataContextType, "setCurrentSiteIndex">,
    children: React.ReactNode
}) => {

    const [currentSiteData, setCurrentSiteData] = useState<ExplorationSite | null>(data.currentSiteData);
    const [currentSiteIndex, setCurrentSiteIndex] = useState(data.data?.sites.findIndex(site => site.name === data.currentSiteData?.name) ?? 0);

    useEffect(() => {
        setCurrentSiteData(data.data?.sites[currentSiteIndex] ?? null);
    }, [currentSiteIndex]);

    return (
        <GlobeDataContext.Provider value={{
            data: data.data,
            currentSiteData,
            setCurrentSiteIndex: setCurrentSiteIndex,
        }}>{children}</GlobeDataContext.Provider>
    );
}

export const useGlobeData = () => {
    const data = useContext(GlobeDataContext);
    return data;
}