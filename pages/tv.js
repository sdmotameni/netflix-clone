import Navbar from "../components/Navbar";
import Movies from "../components/Movies";

export default function TV({ movies = {} }) {
  return (
    <main className="min-h-screen bg-[#141414]">
      <Navbar currentPage="tv" />
      <Movies movies={movies} />
    </main>
  );
}
