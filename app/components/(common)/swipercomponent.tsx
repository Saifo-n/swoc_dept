"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Keyboard, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperComponent = () => {
  return (
    <section className="relative w-full max-w-[1920px] mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Keyboard, Mousewheel]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        navigation={true}
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        mousewheel={{ forceToAxis: true }}
        grabCursor={true}
        className="w-full h-[700px]"
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1, 
          },
          1024: { 
            slidesPerView: 1, 
          },
        }}
      >
        <SwiperSlide>
          <div className="relative w-full h-[700px]">
            <Image
              src="/upload/slide-01.png"
              alt="slide-1"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[700px]">
            <Image
              src="/upload/slide-02.jpg"
              alt="slide-2"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[700px]">
            <Image
              src="/upload/slide-03.jpg"
              alt="slide-3"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SwiperComponent;
