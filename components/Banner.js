import { PlayIcon, InformationCircleIcon } from "@heroicons/react/solid";

export default function Banner({ movie }) {
  const imageUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  console.log(movie);

  return (
    <div className="relative text-white mb-14">
      <img
        className="object-contain w-full h-auto opacity-60"
        src={imageUrl}
        alt=""
      />
      <div className="absolute w-1/3 ml-20 space-y-4 top-1/3">
        <div className="text-6xl font-bold">{movie.name || movie.title}</div>
        <div className="flex items-center w-2/3 space-x-3">
          <button className="bg-[#d22f26] hover:bg-red-700 py-3 rounded w-1/2 font-medium flex items-center justify-center space-x-1">
            <PlayIcon className="object-contain w-5 h-5" />
            <p>Play</p>
          </button>
          <button className="flex items-center justify-center w-1/2 py-3 space-x-1 font-medium rounded cursor-pointer bg-gray-600/50 hover:bg-gray-700/50">
            <InformationCircleIcon className="object-contain w-5 h-5" />
            <p>More Info</p>
          </button>
        </div>
        <div className="text-xl font-normal leading-relaxed tracking-wide line-clamp-3">
          {movie.overview}
        </div>
      </div>
      {/* Fade Gradient */}
      <div className="absolute bottom-0 h-64 w-full bg-gradient-to-t from-[#141414]" />
    </div>
  );
}
