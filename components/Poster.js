// TODO: Implement Next image for performance

export default function Poster({ movie }) {
  const imageUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  return (
    <div className="relative w-64 h-auto overflow-hidden rounded-lg group">
      <img className="group-hover:opacity-50" src={imageUrl} alt="" />
      <div className="absolute bottom-0 hidden p-2 text-lg font-semibold text-white group-hover:block">
        <p className="text-xl">{movie.name || movie.title}</p>
        <p className="text-xs">Genre1 • Genre2 • Genre3 </p>
      </div>
    </div>
  );
}
