import Poster from "./Poster";

export default function Row({ category, movies }) {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold text-white">{category}</h2>
        <div className="text-white">Pagination</div>
      </div>
      <div className="flex space-x-2 overflow-y-scroll scrollbar-hide">
        {movies.map((movie, index) => (
          <div key={index}>
            <Poster movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}
