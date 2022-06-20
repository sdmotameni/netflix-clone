import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";
import { useEffect } from "react";

import Poster from "./Poster";
import useViewport from "../hooks/useViewport";
// import SwiperButton from "../components/common/SwiperButton";

export default function Row({ category, movies }) {
  const { width } = useViewport();

  const rowSwiperParams = {
    observer: true,
    observeParents: true,
    breakpoints: {
      1378: { slidesPerView: 6, slidesPerGroup: 6 },
      998: { slidesPerView: 4, slidesPerGroup: 4 },
      625: { slidesPerView: 3, slidesPerGroup: 3 },
      330: { slidesPerView: 2, slidesPerGroup: 2 },
      0: { slidesPerView: 1.5, slidesPerGroup: 1.5 },
    },
    loopAdditionalSlides:
      width >= 1378 ? 5 : width >= 998 ? 3 : width >= 625 ? 2 : 2,
    spaceBetween: 10,
    loop: false,
    grabCursor: false,
    draggable: false,
    preventClicksPropagation: true,
    preventClicks: true,
    slideToClickedSlide: false,
    allowTouchMove: true,
  };

  return (
    <div className="relative">
      {/* Fade gradients */}
      <div className="absolute left-0 z-10 w-5 md:w-10 lg:w-20 h-full bg-gradient-to-r from-[#141414]" />
      <div className="absolute right-0 z-10 w-5 md:w-10 lg:w-20 h-full bg-gradient-to-l from-[#141414]" />
      {/* End of fade gradients */}
      <div className="flex justify-between px-5 mb-3 md:px-10 lg:px-24">
        <h2 className="text-lg font-semibold text-white lg:text-2xl">
          {category}
        </h2>
        <div className="text-white">{/* pagination component */}</div>
      </div>
      <div className="relative">
        <Swiper {...rowSwiperParams} modules={[Pagination, Scrollbar, A11y]}>
          {/* <SwiperButton swipeNext={false}>
            <ChevronLeftIcon className="w-16 h-16 text-gray-600" />
          </SwiperButton> */}
          {movies.map((movie, index) => {
            return (
              <SwiperSlide key={index}>
                {
                  <Poster
                    movie={movie}
                    isPoster={category == "NetflixOriginals"}
                  />
                }
              </SwiperSlide>
            );
          })}
          {/* <SwiperButton>
            <ChevronRightIcon className="w-16 h-16 text-gray-600" />
          </SwiperButton> */}
          <span slot="wrapper-start">
            <div className="w-5 md:w-10 lg:w-24" />
          </span>
          <span slot="wrapper-end">
            <div className="w-5 md:w-10 lg:w-24" />
          </span>
        </Swiper>
      </div>
    </div>
  );
}
