export type ExplorationSite = {
    name: string;
    description: string;
    hint: string;
    image: string;
    location: {
        latitude: number;
        longitude: number;
    }
}

export type ExplorationDataItem = {
    sites: ExplorationSite[];
    title: string;
}

const EXPLORATION_DATA: Record<string, ExplorationDataItem> = {
    "monuments": 
    {
        "title": "Monuments",
        "sites": [
            {
                name: "Taj Mahal",
                description: "Taj Mahal is a mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India.",
                hint: "This was built by a Mughal emperor in memory of his wife.",
                image: "/assets/taj-mahal.jpg",
                location: {
                    latitude: 27.1751,
                    longitude: 78.0421,
                }
            },
            {
                name: "Leaning Tower of Pisa",
                description: "The Leaning Tower of Pisa is a freestanding bell tower, the campanile di Giotto, in the Italian city of Pisa, known worldwide for its nearly four-degree lean, which is the result of an unstable subsoil composed of clay, sand and marl.",
                hint: "This is the most photographed tower in the world.",
                image: "/assets/leaning-tower.jpg",
                location: {
                    latitude: 43.7230,
                    longitude: 10.3966,
                }
            },
        ]
    }
}

const getGlobeData = (gameId: string) => {
    if (gameId in EXPLORATION_DATA) {
        return EXPLORATION_DATA[gameId];
    }
    return null;
}

export default getGlobeData;