import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Home() {
  return (
    <div className='w-full'>
        <div className="heroSection w-full h-screen flex justify-center items-center">
            <h1>Hero</h1>
        </div>

        <div className='h-screen'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </div>


        <div class="scrollPage mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div class="relative flex flex-col gap-8 w-screen overflow-hidden left-1/2 -translate-x-1/2">
            <div class="relative flex gap-8 home-videos-row-top animate-left-right">
            <video src="https://swiperjs.com/images/home/videos/one-plus.mp4" autoPlay loop muted playsInline loading="lazy"
                class="bg-surface-1 w-full md:w-1/2 shrink-0 lg:grayscale-100 hover:grayscale-0 lg:opacity-50 hover:opacity-100 transition-all duration-300"></video>
            <video src="https://swiperjs.com/images/home/videos/one-plus.mp4" autoPlay loop muted playsInline loading="lazy"
                class="bg-surface-1 w-full md:w-1/2 shrink-0 lg:grayscale-100 hover:grayscale-0 lg:opacity-50 hover:opacity-100 transition-all duration-300"></video>
            <video src="https://swiperjs.com/images/home/videos/msi.mp4" autoPlay loop muted playsInline loading="lazy"
                class="bg-surface-1 w-full md:w-1/2 shrink-0 lg:grayscale-100 hover:grayscale-0 lg:opacity-50 hover:opacity-100 transition-all duration-300"></video>
            <video src="https://swiperjs.com/images/home/videos/one-plus.mp4" autoPlay loop muted playsInline loading="lazy"
                class="bg-surface-1 w-full md:w-1/2 shrink-0 lg:grayscale-100 hover:grayscale-0 lg:opacity-50 hover:opacity-100 transition-all duration-300"></video>
            <video src="https://swiperjs.com/images/home/videos/nike.mp4" autoPlay loop muted playsInline loading="lazy"
                class="bg-surface-1 w-full md:w-1/2 shrink-0 lg:grayscale-100 hover:grayscale-0 lg:opacity-50 hover:opacity-100 transition-all duration-300"></video>
            </div>

            <div class="relative flex gap-8 home-videos-row-bottom animate-right-left">
            <video src="https://swiperjs.com/images/home/videos/lambo.mp4" autoPlay loop muted playsInline loading="lazy"
                class="bg-surface-1 w-full md:w-1/2 shrink-0 lg:grayscale-100 hover:grayscale-0 lg:opacity-50 hover:opacity-100 transition-all duration-300"></video>
            <video src="https://swiperjs.com/images/home/videos/homedepot.mp4" autoPlay loop muted playsInline loading="lazy"
                class="bg-surface-1 w-full md:w-1/2 shrink-0 lg:grayscale-100 hover:grayscale-0 lg:opacity-50 hover:opacity-100 transition-all duration-300"></video>
            <video src="https://swiperjs.com/images/home/videos/samsung.mp4" autoPlay loop muted playsInline loading="lazy"
                class="bg-surface-1 w-full md:w-1/2 shrink-0 lg:grayscale-100 hover:grayscale-0 lg:opacity-50 hover:opacity-100 transition-all duration-300"></video>
            <video src="https://swiperjs.com/images/home/videos/coca-cola.mp4" autoPlay loop muted playsInline loading="lazy"
                class="bg-surface-1 w-full md:w-1/2 shrink-0 lg:grayscale-100 hover:grayscale-0 lg:opacity-50 hover:opacity-100 transition-all duration-300"></video>
            <video src="https://swiperjs.com/images/home/videos/epic.mp4" autoPlay loop muted playsInline loading="lazy"
                class="bg-surface-1 w-full md:w-1/2 shrink-0 lg:grayscale-100 hover:grayscale-0 lg:opacity-50 hover:opacity-100 transition-all duration-300"></video>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Home