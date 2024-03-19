'use client'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Navigation, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const Album = ({ photos }) => {
    // const [currentImage, setCurrentImage] = useState(0);

    // const handlePrev = () => {
    //     setCurrentImage((prev) => (prev > 0 ? prev - 1 : photos.length - 1));
    // };

    // const handleNext = () => {
    //     setCurrentImage((prev) => (prev < photos.length - 1 ? prev + 1 : 0));
    // };

    return (
        <div className='px-5 my-5'>
            <Swiper
                spaceBetween={10}
                slidesPerView={6}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
            >
                {photos.map((photo, index) => (
                    <SwiperSlide key={index}>
                        <img src={photo.src} alt={`Image ${index}`} />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* {photos.length > 6 && (
                <div style={{ position: 'absolute', top: 0, right: 0 }}>
                    <button className="swiper-button-prev" onClick={handlePrev}>
                        Previous
                    </button>
                    <button className="swiper-button-next" onClick={handleNext}>
                        Next
                    </button>
                </div>
            )} */}
        </div>
    );
};

export default Album;



