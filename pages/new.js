import Navbar from "../components/Navbar";
import Movies from "../components/Movies";

export default function New({ movies = {} }) {
  return (
    <main className="min-h-screen bg-[#141414]">
      <Navbar currentPage="new" />
      <Movies movies={movies} />
    </main>
  );
}
