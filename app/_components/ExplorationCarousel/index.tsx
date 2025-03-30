"use client";

import React, { useState } from 'react';
import Slider from "react-slick";
import ExplorationCard from '../ExplorationCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EXPLORATION_CATEGORIES = [
    {
        id: 'monuments',
        title: 'Famous Monuments',
        image: '/assets/taj-mahal.jpg'
    },
    {
        id: 'volcanoes',
        title: 'Active Volcanoes',
        image: '/assets/vesuvius.jpg'
    },
    {
        id: 'islands',
        title: 'Paradise Islands',
        image: '/assets/maldives.jpg'
    },
    {
        id: 'deserts',
        title: 'Mysterious Deserts',
        image: '/assets/sahara.jpg'
    },
    {
        id: 'waterfalls',
        title: 'Majestic Waterfalls',
        image: '/assets/niagara.jpg'
    }
];

const ExplorationCarousel: React.FC = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        beforeChange: (current: number, next: number) => setActiveSlide(next),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="exploration-carousel relative max-w-[1400px] mx-auto px-4">
            <style jsx global>{`
                .exploration-carousel .slick-slide {
                    padding: 0 0.5rem;
                }
                .exploration-carousel .slick-center {
                    transform: scale(1.05);
                    transition: transform 0.3s ease;
                }
                .exploration-carousel .slick-dots {
                    bottom: -2rem;
                }
                .exploration-carousel .slick-dots li button:before {
                    color: white;
                    opacity: 0.5;
                }
                .exploration-carousel .slick-dots li.slick-active button:before {
                    color: white;
                    opacity: 1;
                }
                .exploration-carousel .slick-track {
                    padding: 1.5rem 0;
                }
                .exploration-carousel .slick-list {
                    margin: 0 -0.5rem;
                }
            `}</style>
            <Slider {...settings}>
                {EXPLORATION_CATEGORIES.map((category, index) => (
                    <div key={category.id}>
                        <ExplorationCard
                            title={category.title}
                            image={category.image}
                            gameId={category.id}
                            isActive={index === activeSlide}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ExplorationCarousel; 