"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import cameraSlideImage from '../../../public/images/slides/camera-slide.jpg'
import { Button } from '@/components/ui/button'

const SliderSection = () => {

    const commonSliderStyle = {
        backgroundSize: 'cover',
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
    }
    const slideOneBg = {
        backgroundImage: `url(/images/slides/watch-slide.jpg)`,
    }
    const slideTwoBg = {
        backgroundImage: `url(/images/slides/camera-slide.jpg)`,
    }
    const slideThreeBg = {
        backgroundImage: `url(/images/slides/earbuds-slide.jpg)`,
    }

    return (
        <div className='container mx-auto px-5 h-[600px] flex gap-5'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
            //   onSlideChange={() => console.log('slide change')}
            //   onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className='h-[600px]'>
                    <div className="h-[600px] w-full  pl-20  text-white flex flex-col gap-3 justify-center" style={{
                        ...commonSliderStyle,
                        ...slideOneBg
                    }}>
                        <h1 className='z-10 text-5xl font-bold'>Smart Watch</h1>
                        <p>Best Smart watch ever. Click this button bellow and buy now.</p>
                        <Button className='bg-black max-w-[130px]'>Buy Now</Button>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='h-[600px]'>
                    <div className="h-[600px] w-full  pl-20  text-white flex flex-col gap-3 justify-center" style={{
                        ...commonSliderStyle,
                        ...slideTwoBg
                    }}>
                        <h1 className='z-10 text-5xl font-bold'>Smart Watch</h1>
                        <p>Best camera ever. Click this button bellow and buy now.</p>
                        <Button className='bg-black max-w-[130px]'>Buy Now</Button>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='h-[600px]'>
                    <div className="h-[600px] w-full  pl-20  text-white flex flex-col gap-3 justify-center" style={{
                        ...commonSliderStyle,
                        ...slideThreeBg
                    }}>
                        <h1 className='z-10 text-5xl font-bold'>ANC Airbuds Xaomi</h1>
                        <p>Best Airbuds ever. Click this button bellow and buy now.</p>
                        <Button className='bg-black max-w-[130px]'>Buy Now</Button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SliderSection
