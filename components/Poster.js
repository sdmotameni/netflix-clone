// TODO: Implement Next image for performance
import { PlayIcon } from "@heroicons/react/solid";
import { PlusCircleIcon, ArrowCircleDownIcon } from "@heroicons/react/outline";
import { motion, useAnimation } from "framer-motion";

import { posterDetailVariants } from "../motionUtils";

export default function Poster({ movie, category }) {
  const controls = useAnimation();

  const imageUri =
    category == "NetflixOriginals" ? movie.poster_path : movie.backdrop_path;
  const imageUrl = `https://image.tmdb.org/t/p/original${imageUri}`;

  const handleHover = (active) => {
    controls.start(active ? "visible" : "hidden");
  };

  return (
    <div
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      className="relative h-auto overflow-hidden rounded-lg group"
    >
      <img
        className="object-contain group-hover:opacity-50"
        src={imageUrl}
        alt=""
      />
      <motion.div
        initial="hidden"
        animate={controls}
        variants={posterDetailVariants}
        className="absolute bottom-0 p-2"
      >
        <div className="flex -ml-1 text-white">
          <PlayIcon className="w-8 h-8" />
          <PlusCircleIcon className="w-8 h-8" />
          <ArrowCircleDownIcon className="w-8 h-8" />
        </div>
        <div className="text-lg font-semibold text-white ">
          <p className="text-xl line-clamp-1">{movie.name || movie.title}</p>
          <p className="text-xs">Comedy • Action • Crime</p>
        </div>
      </motion.div>
    </div>
  );
}
