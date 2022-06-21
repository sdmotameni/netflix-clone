import { PlayIcon, InformationCircleIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import { useContext } from "react";

import ModalContext from "../context/ModalContext";
import { bannerVariants, bannerChildVariants } from "../utils/motionUtils";

export default function Banner({ movie }) {
  const { showModal } = useContext(ModalContext);

  const imageUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  return (
    <motion.div
      key={movie.name || movie.title}
      initial="hidden"
      animate="visible"
      variants={bannerVariants}
      exit={{ opacity: 0 }}
      className="relative text-white mb-14"
    >
      <img
        className="object-cover h-[85vh] w-full opacity-90"
        src={imageUrl}
        alt=""
      />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={bannerChildVariants}
        className="absolute z-10 flex flex-col items-center w-full space-y-4 lg:w-1/3 bottom-16 lg:ml-20 0 lg:top-1/3 lg:block"
      >
        <div className="text-6xl font-bold text-center lg:text-left">
          {movie.name || movie.title}
        </div>
        <div className="flex items-center w-2/3 space-x-3">
          <button
            onClick={() => showModal(movie)}
            className="bg-[#d22f27] hover:bg-red-700 py-2 lg:py-3 rounded w-1/2 font-medium flex items-center justify-center space-x-1"
          >
            <PlayIcon className="object-contain w-5 h-5" />
            <p>Play</p>
          </button>
          <button
            onClick={() => showModal(movie)}
            className="flex items-center justify-center w-1/2 py-2 space-x-1 font-medium rounded cursor-pointer lg:py-3 bg-gray-400/60 hover:bg-gray-500/60"
          >
            <InformationCircleIcon className="object-contain w-5 h-5" />
            <p>More Info</p>
          </button>
        </div>
        <div className="px-10 text-sm font-normal leading-relaxed tracking-wide text-center md:text-lg md:px-32 lg:px-0 line-clamp-4 lg:line-clamp-3 lg:text-left lg:text-xl">
          {movie.overview}
        </div>
      </motion.div>
      {/* Fade Gradient */}
      <div className="absolute bottom-0 h-96 lg:h-64 w-full bg-gradient-to-t from-[#141414]" />
    </motion.div>
  );
}
