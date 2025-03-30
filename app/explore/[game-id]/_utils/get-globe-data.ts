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
    "monuments": {
        "title": "Famous Monuments",
        "sites": [
            {
                name: "Taj Mahal",
                description: "Taj Mahal is a mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India.",
                hint: "Located in South Asia, in the Northern Hemisphere.",
                image: "/assets/taj-mahal.jpg",
                location: {
                    latitude: 27.1751,
                    longitude: 78.0421,
                }
            },
            {
                name: "Leaning Tower of Pisa",
                description: "The Leaning Tower of Pisa is a freestanding bell tower, the campanile di Giotto, in the Italian city of Pisa, known worldwide for its nearly four-degree lean.",
                hint: "Found in Southern Europe, on the Mediterranean coast.",
                image: "/assets/leaning-tower.jpg",
                location: {
                    latitude: 43.7230,
                    longitude: 10.3966,
                }
            },
            {
                name: "Eiffel Tower",
                description: "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France.",
                hint: "Located in Western Europe, in the Northern Hemisphere.",
                image: "/assets/eiffel-tower.jpg",
                location: {
                    latitude: 48.8584,
                    longitude: 2.2945,
                }
            },
            {
                name: "Great Wall of China",
                description: "The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials.",
                hint: "Found in East Asia, stretching across the Northern Hemisphere.",
                image: "/assets/great-wall.jpg",
                location: {
                    latitude: 40.4319,
                    longitude: 116.5704,
                }
            },
            {
                name: "Statue of Liberty",
                description: "The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor.",
                hint: "Located in North America, on the Atlantic coast.",
                image: "/assets/statue-of-liberty.jpg",
                location: {
                    latitude: 40.6892,
                    longitude: -74.0445,
                }
            }
        ]
    },
    "volcanoes": {
        "title": "Active Volcanoes",
        "sites": [
            {
                name: "Mount Vesuvius",
                description: "Mount Vesuvius is a somma-stratovolcano located on the Gulf of Naples in Campania, Italy.",
                hint: "Found in Southern Europe, in the Northern Hemisphere.",
                image: "/assets/vesuvius.jpg",
                location: {
                    latitude: 40.8213,
                    longitude: 14.4259,
                }
            },
            {
                name: "Mount Fuji",
                description: "Mount Fuji is Japan's tallest mountain and an active stratovolcano.",
                hint: "Located in East Asia, in the Northern Hemisphere.",
                image: "/assets/mount-fuji.jpg",
                location: {
                    latitude: 35.3606,
                    longitude: 138.7274,
                }
            },
            {
                name: "Kilauea",
                description: "Kilauea is an active shield volcano in the Hawaiian Islands.",
                hint: "Found in the Pacific Ocean, in the Northern Hemisphere.",
                image: "/assets/kilauea.jpg",
                location: {
                    latitude: 19.4213,
                    longitude: -155.2868,
                }
            },
            {
                name: "Mount Etna",
                description: "Mount Etna is an active stratovolcano on the east coast of Sicily, Italy.",
                hint: "Located in Southern Europe, on the Mediterranean Sea.",
                image: "/assets/mount-etna.jpg",
                location: {
                    latitude: 37.7510,
                    longitude: 14.9934,
                }
            },
            {
                name: "Popocatépetl",
                description: "Popocatépetl is an active stratovolcano in central Mexico.",
                hint: "Found in North America, in the Northern Hemisphere.",
                image: "/assets/popocatepetl.jpg",
                location: {
                    latitude: 19.0233,
                    longitude: -98.6222,
                }
            }
        ]
    },
    "islands": {
        "title": "Paradise Islands",
        "sites": [
            {
                name: "Maldives",
                description: "The Maldives is a tropical nation in the Indian Ocean composed of 26 coral atolls.",
                hint: "Located in the Northern Hemisphere, near the equator in the Indian Ocean.",
                image: "/assets/maldives.jpg",
                location: {
                    latitude: 3.2028,
                    longitude: 73.2207,
                }
            },
            {
                name: "Bora Bora",
                description: "Bora Bora is a small South Pacific island northwest of Tahiti in French Polynesia.",
                hint: "Found in the Southern Hemisphere, in the South Pacific Ocean.",
                image: "/assets/bora-bora.jpg",
                location: {
                    latitude: -16.5004,
                    longitude: -151.7415,
                }
            },
            {
                name: "Santorini",
                description: "Santorini is one of the Cyclades islands in the Aegean Sea.",
                hint: "Located in Southern Europe, in the Mediterranean Sea.",
                image: "/assets/santorini.jpg",
                location: {
                    latitude: 36.3932,
                    longitude: 25.4615,
                }
            },
            {
                name: "Bali",
                description: "Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs.",
                hint: "Found in Southeast Asia, in the Southern Hemisphere.",
                image: "/assets/bali.jpg",
                location: {
                    latitude: -8.3405,
                    longitude: 115.0920,
                }
            },
            {
                name: "Maui",
                description: "Maui is the second-largest of the Hawaiian Islands at 727.2 square miles.",
                hint: "Located in the Northern Hemisphere, in the Pacific Ocean.",
                image: "/assets/maui.jpg",
                location: {
                    latitude: 20.7984,
                    longitude: -156.3319,
                }
            }
        ]
    },
    "deserts": {
        "title": "Mysterious Deserts",
        "sites": [
            {
                name: "Sahara Desert",
                description: "The Sahara is the largest hot desert in the world and the third-largest desert overall.",
                hint: "Located in North Africa, stretching across the Northern Hemisphere.",
                image: "/assets/sahara.jpg",
                location: {
                    latitude: 23.4162,
                    longitude: 25.6628,
                }
            },
            {
                name: "Namib Desert",
                description: "The Namib is a coastal desert in southern Africa.",
                hint: "Found in Southern Africa, in the Southern Hemisphere.",
                image: "/assets/namib.jpg",
                location: {
                    latitude: -24.7398,
                    longitude: 15.2870,
                }
            },
            {
                name: "Atacama Desert",
                description: "The Atacama Desert is a plateau in South America, covering a 1,000-kilometre strip of land on the Pacific coast.",
                hint: "Located in South America, in the Southern Hemisphere.",
                image: "/assets/atacama.jpg",
                location: {
                    latitude: -24.7398,
                    longitude: -69.2870,
                }
            },
            {
                name: "Gobi Desert",
                description: "The Gobi Desert is a large desert region in Asia.",
                hint: "Found in East Asia, in the Northern Hemisphere.",
                image: "/assets/gobi.jpg",
                location: {
                    latitude: 42.7951,
                    longitude: 103.8467,
                }
            },
            {
                name: "Mojave Desert",
                description: "The Mojave Desert is the driest desert in North America.",
                hint: "Located in North America, in the Northern Hemisphere.",
                image: "/assets/mojave.jpg",
                location: {
                    latitude: 35.0844,
                    longitude: -115.7127,
                }
            }
        ]
    },
    "waterfalls": {
        "title": "Majestic Waterfalls",
        "sites": [
            {
                name: "Niagara Falls",
                description: "Niagara Falls is a group of three waterfalls at the southern end of Niagara Gorge.",
                hint: "Located in North America, on the border between two countries.",
                image: "/assets/niagara.jpg",
                location: {
                    latitude: 43.0791,
                    longitude: -79.0747,
                }
            },
            {
                name: "Victoria Falls",
                description: "Victoria Falls is a waterfall on the Zambezi River in southern Africa.",
                hint: "Found in Southern Africa, in the Southern Hemisphere.",
                image: "/assets/victoria-falls.jpg",
                location: {
                    latitude: -17.9243,
                    longitude: 25.8567,
                }
            },
            {
                name: "Iguazu Falls",
                description: "Iguazu Falls is a waterfall system on the Iguazu River.",
                hint: "Located in South America, in the Southern Hemisphere.",
                image: "/assets/iguazu.jpg",
                location: {
                    latitude: -25.6953,
                    longitude: -54.4367,
                }
            },
            {
                name: "Angel Falls",
                description: "Angel Falls is a waterfall in Venezuela.",
                hint: "Found in South America, in the Northern Hemisphere.",
                image: "/assets/angel-falls.jpg",
                location: {
                    latitude: 5.9701,
                    longitude: -62.5362,
                }
            },
            {
                name: "Yosemite Falls",
                description: "Yosemite Falls is the highest waterfall in Yosemite National Park.",
                hint: "Located in North America, in the Northern Hemisphere.",
                image: "/assets/yosemite-falls.jpg",
                location: {
                    latitude: 37.7561,
                    longitude: -119.5962,
                }
            }
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