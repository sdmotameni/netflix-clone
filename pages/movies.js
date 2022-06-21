import { useState, useEffect } from "react";
import Head from "next/head";

import Navbar from "../components/Navbar";
import MoviesGrid from "../components/common/MoviesGrid";
import Footer from "../components/common/Footer";
import DetailsModal from "../components/common/DetailsModal";

import ModalContext from "../context/ModalContext";
import api from "../apisauceInstance";
import { requests } from "../requests";

export default function MoviesPage() {
  const [movies, setMovies] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState();

  const fetchMovies = async () => {
    let obj = [];

    for (let request in requests) {
      const { data } = await api.get(requests[request]);

      obj = [...obj, ...data.results];
    }

    setMovies(obj);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const showModal = (movie) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  return (
    <>
      <Head>
        <title>Movies - Netflix Clone by Sep Motameni</title>
        <meta name="description" content="Netflix Clone by Sep Motameni" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ModalContext.Provider value={{ showModal, closeModal }}>
        <main className="min-h-screen bg-[#141414]">
          <Navbar currentPage="movies" />
          {movies && <MoviesGrid title="All Movies" movies={movies} />}
        </main>
        <DetailsModal movie={selectedMovie} />
      </ModalContext.Provider>
      <Footer />
    </>
  );
}
