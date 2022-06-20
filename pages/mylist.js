import Navbar from "../components/Navbar";
import Movies from "../components/Movies";

export default function MyList({ movies = {} }) {
  return (
    <main className="min-h-screen bg-[#141414]">
      <Navbar currentPage="mylist" />
      <Movies movies={movies} />
    </main>
  );
}
