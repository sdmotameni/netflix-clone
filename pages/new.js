import { useState, useEffect } from "react";
import Head from "next/head";

import Navbar from "../components/Navbar";
import MoviesGrid from "../components/common/MoviesGrid";
import Footer from "../components/common/Footer";

import api from "../apisauceInstance";
import { requests } from "../requests";

export default function MoviesPage() {
  const [movies, setMovies] = useState(null);

  const fetchMovies = async () => {
    const { data } = await api.get(requests.fetchTopRated);
    setMovies(data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <Head>
        <title>New & Popular - Netflix Clone by Sep Motameni</title>
        <meta name="description" content="Netflix Clone by Sep Motameni" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-[#141414]">
        <Navbar currentPage="new" />
        {movies && <MoviesGrid title="New and Popular" movies={movies} />}
      </main>
      <Footer />
    </>
  );
}
