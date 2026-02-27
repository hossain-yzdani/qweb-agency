"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useRef, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";

const Videos = () => {
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const [firstLoad, setFirstLoad] = useState(true);

  const handleSlideChange = (swiper: any) => {
    if (window.innerWidth < 768) {
      videoRefs.current.forEach((vid, index) => {
        if (vid && index !== swiper.activeIndex) {
          vid.pause();
          vid.currentTime = 0;
        }
      });

      const currentVid = videoRefs.current[swiper.activeIndex];
      currentVid?.play();
    }
  };

  return (
    <div className="mb-10 overflow-visible px-12">
      <h2 className="text-white font-bold text-2xl text-center mb-6">
        نمونه کار ها
      </h2>

      <Swiper
        className="px-4"
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={handleSlideChange}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
      >
        {[1,2,3,4,5].map((video, idx) => (
          <SwiperSlide
            key={idx}
            className="glass rounded-xl flex flex-row items-center justify-center p-1 mb-10"
          >
            <div>
              <img className="w-30" src="/logo/qweb-logo-1.png" alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Videos;
