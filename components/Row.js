import Poster from "./Poster";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { useEffect } from "react";

export default function Row({ category, movies }) {
  return (
    <div className="relative">
      {/* Fade gradients */}
      <div className="absolute left-0 z-10 w-20 h-full bg-gradient-to-r from-[#141414]" />
      <div className="absolute right-0 z-10 w-20 h-full bg-gradient-to-l from-[#141414]" />
      <div className="flex justify-between px-24">
        <h2 className="text-2xl font-semibold text-white">{category}</h2>
        <div className="text-white">Pagination</div>
      </div>
      <div className="flex mt-3 overflow-visible overflow-y-scroll scrollbar-hide">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={7}
          freeMode={true}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {movies.map((movie, index) => {
            return (
              <SwiperSlide key={index}>
                {<Poster movie={movie} category={category} />}
              </SwiperSlide>
            );
          })}
          <span slot="wrapper-start">
            <div className="w-24" />
          </span>
          <span slot="wrapper-end">
            <div className="w-24"> hello</div>
          </span>
        </Swiper>
      </div>
    </div>
  );
}
