// TODO: Implement Next image for performance

export default function Poster({ movie, category }) {
  const imageUri =
    category == "NetflixOriginals" ? movie.poster_path : movie.backdrop_path;

  const imageUrl = `https://image.tmdb.org/t/p/original${imageUri}`;

  return (
    <div className="relative w-64 h-auto overflow-hidden rounded-lg group">
      <img
        className="object-contain group-hover:opacity-50"
        src={imageUrl}
        alt=""
      />
      <div className="absolute bottom-0 hidden p-2 text-lg font-semibold text-white group-hover:block">
        <p className="text-xl line-clamp-1">{movie.name || movie.title}</p>
        <p className="text-xs">Genre1 • Genre2 • Genre3 </p>
      </div>
    </div>
  );
}
