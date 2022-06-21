import { motion } from "framer-motion";
import { useContext } from "react";

import ModalContext from "../../context/ModalContext";
import { modalVariants, modalOverlayVariants } from "../../utils/motionUtils";

export default function DetailsModal({ movie }) {
  const { closeModal } = useContext(ModalContext);

  return (
    movie && (
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={modalOverlayVariants}
        onClick={closeModal}
        className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-gray-900/90"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={modalVariants}
          className="w-4/5 lg:w-1/3 bg-[#181818] rounded-xl overflow-hidden relative"
        >
          <div
            className="absolute top-0 right-0 p-5 text-3xl text-white"
            onClick={closeModal}
          >
            &#10005;
          </div>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt=""
          />
          <div className="py-10 text-white px-7">
            <h1 className="text-2xl font-bold">{movie.title || movie.name}</h1>
            <div className="leading-snug">{movie.overview}</div>
            {/* Link Break */}
            <div className="bg-gray-500 my-7 h-0.5" />
            <div className="text-xl">
              Info on{" "}
              <span className="font-semibold">{movie.name || movie.title}</span>
            </div>
            <div>
              <span className="text-gray-500">Genres:</span> Sci-Fi & Fantasy,
              Action & Adventure, Comedy
            </div>
            <div>
              <span className="text-gray-500">First air date:</span>{" "}
              {movie.first_air_date}
            </div>
            <div>
              <span className="text-gray-500">Average Vote:</span>{" "}
              {movie.vote_average}
            </div>
            <div>
              <span className="text-gray-500">Original Language:</span>{" "}
              {movie.original_language}
            </div>
            <div>
              <span className="text-gray-500">Age Classification:</span>{" "}
              {movie.adult
                ? movie.adult
                  ? "Adult (Rated R)"
                  : "Suitable for all ages"
                : "Not Available"}
            </div>
          </div>
        </motion.div>
      </motion.div>
    )
  );
}
