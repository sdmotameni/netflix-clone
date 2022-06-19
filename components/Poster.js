// TODO: Implement Next image for performance

import { PlayIcon } from "@heroicons/react/solid";
import { PlusCircleIcon, ArrowCircleDownIcon } from "@heroicons/react/outline";

export default function Poster({ movie, category }) {
  const imageUri =
    category == "NetflixOriginals" ? movie.poster_path : movie.backdrop_path;

  const imageUrl = `https://image.tmdb.org/t/p/original${imageUri}`;

  return (
    <div className="relative w-full h-auto overflow-hidden rounded-lg group">
      <img
        className="object-contain group-hover:opacity-50"
        src={imageUrl}
        alt=""
      />
      <div className="absolute bottom-0 p-2">
        <div className="flex -ml-1 text-white">
          <PlayIcon className="w-8 h-8" />
          <PlusCircleIcon className="w-8 h-8" />
          <ArrowCircleDownIcon className="w-8 h-8" />
        </div>
        <div className="text-lg font-semibold text-white ">
          <p className="text-xl line-clamp-1">{movie.name || movie.title}</p>
          <p className="text-xs">Comedy • Action • Crime</p>
        </div>
      </div>
    </div>
  );
}
