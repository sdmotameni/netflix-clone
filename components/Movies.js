import Row from "./Row";

export default function Movies({ movies }) {
  return (
    <div className="space-y-20">
      {Object.keys(movies).map((category, index) => (
        <Row key={index} movies={movies[category]} category={category} />
      ))}
    </div>
  );
}
