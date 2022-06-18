import Poster from "./Poster";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

export default function Row({ category, movies }) {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold text-white">{category}</h2>
        <div className="text-white">Pagination</div>
      </div>
      <div className="flex mt-3 space-x-2 overflow-y-scroll scrollbar-hide">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={6}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {movies.map((movie, index) => (
            <div key={index}>
              <SwiperSlide>
                <Poster movie={movie} />
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
