import Navbar from "../components/Navbar";
import Movies from "../components/Movies";

export default function MoviesPage({ movies = {} }) {
  return (
    <main className="min-h-screen bg-[#141414]">
      <Navbar currentPage="movies" />
      <Movies movies={movies} />
    </main>
  );
}
