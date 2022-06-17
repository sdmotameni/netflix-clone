// TODO: Implement Next image for performance

export default function Poster({ movie }) {
  const imageUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  return (
    <div className="relative w-64 h-auto overflow-hidden rounded-lg">
      <img className="" src={imageUrl} alt="" />
      <p className="absolute bottom-0 p-2 text-lg font-semibold text-white">
        {movie.name || movie.title}
      </p>
      <p></p>
    </div>
  );
}
