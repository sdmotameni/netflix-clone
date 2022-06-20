import Poster from "../Poster";

export default function MoviesGrid({ title, movies }) {
  return (
    <div className="px-3 pt-32 lg:px-20">
      <h2 className="mb-4 text-2xl font-semibold text-white lg:text-3xl">
        {title}
      </h2>
      <div className="grid grid-cols-2 gap-4 text-white md:grid-cols-3 lg:grid-cols-4">
        {movies.map((movie, index) => (
          <div key={index} className="rounded-2xl">
            <Poster movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}
