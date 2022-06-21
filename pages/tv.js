import { useState, useEffect } from "react";
import Head from "next/head";

import Navbar from "../components/Navbar";
import MoviesGrid from "../components/common/MoviesGrid";
import Footer from "../components/common/Footer";
import DetailsModal from "../components/common/DetailsModal";

import ModalContext from "../context/ModalContext";
import api from "../apisauceInstance";
import { otherRequests } from "../requests";

export default function MoviesPage() {
  const [movies, setMovies] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState();

  const fetchMovies = async () => {
    const { data } = await api.get(otherRequests.discoverSeries);
    setMovies(data.results);
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
        <title>TV Series - Netflix Clone by Sep Motameni</title>
        <meta name="description" content="Netflix Clone by Sep Motameni" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ModalContext.Provider value={{ showModal, closeModal }}>
        <main className="min-h-screen bg-[#141414]">
          <Navbar currentPage="tv" />
          {movies && <MoviesGrid title="TV Series" movies={movies} />}
        </main>
        <DetailsModal movie={selectedMovie} />
      </ModalContext.Provider>
      <Footer />
    </>
  );
}
