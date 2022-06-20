import { useSwiper } from "swiper/react";

const SwiperButton = ({ swipeNext = true, className, children }) => {
  const swiper = useSwiper();

  const handleSwipe = () => {
    swipeNext ? swiper.slideNext() : swiper.slidePrev();
  };

  return (
    <button className={className} onClick={handleSwipe}>
      {children}
    </button>
  );
};

export default SwiperButton;
