import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TrendingGames = ({ gamelist }) => {
    useEffect(() => {
        console.log(gamelist);
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='mt-5 hidden md:block'>
            <h1 className='font-bold text-[33px] mb-2 dark:text-white'>Trending Games</h1>

            <div className='hidden md:grid md:grid-cols-1 md:gap-5 lg:grid-cols-1'>
                <Slider {...settings}>
                    {gamelist.map((item, index) => (
                        <div key={index} className=' gap-9 rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 group hover:scale-95 cursor-pointer transition-all duration-100 ease-in'>
                            <img src={item.background_image} className='rounded-lg object-cover rounded-b-none h-[270px]' alt={item.name} />
                            <h2 className='dark:text-white text-[17px] font-semibold p-2'>{item.name}</h2>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default TrendingGames;
