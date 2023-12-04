import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiOutlinePlus } from 'react-icons/ai';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';
import ProfilePicture from '../../global/ProfilePicture';

function Swipper() {
    const [swiperRef, setSwiperRef] = useState(null);

    const [slides, setSlides] = useState(
        Array.from({ length: 100 }).map((_, index) => `Slide ${index + 1}`)
    );


    return (
        <>
            <Swiper
                modules={[Virtual, Navigation, Pagination]}
                onSwiper={setSwiperRef}
                slidesPerView={4}
                centeredSlides={false}
                spaceBetween={10}
                pagination={{
                    type: 'fraction',
                }}
                // navigation={true}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                virtual
            >
                <SwiperSlide  className="custom-shadow-slide rounded-xl overflow-hidden">
                    <div className='w-full h-full'>
                        <div className='w-full h-full shadow-2xl'>
                            <ProfilePicture />
                            <div className='w-full h-full black-lite absolute top-0 left-0 flex justify-center items-center'>
                                <div className='w-[60px] h-[60px] absolute rounded-full bg-c-blue opacity-60 text-white flex justify-center items-center text-3xl'>
                                    <AiOutlinePlus />
                                </div>
                            </div>
                            <div className='w-full h-14 bg-white absolute bottom-0 flex items-center justify-center'>
                                Create Story
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {slides.map((slideContent, index) => (
                    <SwiperSlide key={slideContent} virtualIndex={index}  className="custom-shadow-slide rounded-xl overflow-hidden">
                        <div className='w-full h-full select-none flex justify-center items-center'>
                            <img src="/SVGS/Artboard 1.png" className='w-full' alt="" />
                            <div className='w-full h-full black-lite-w absolute top-0 left-0 flex p-3'>
                                <div className='w-10 h-10 bg-c-blue rounded-full overflow-hidden'>
                                    <ProfilePicture />
                                </div>
                                <div className='w-full h-auto text-white px-2 absolute bottom-0 text-left'>
                                    <div className='flex-1 h-full text-sm pb-3'>
                                        <div className='w-auto font-semibold'>
                                            Mithun Sarkar
                                        </div>
                                        <div className='text-[12px]'>
                                            10 minite ago
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </Swiper>
            {/* Custom Navigation Buttons */}

        </>
    );
}

export default Swipper;

