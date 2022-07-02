import Head from "next/head";
import { useState, useEffect, useContext } from "react";
import { AnimatePresence } from "framer-motion";

import Movies from "../components/Movies";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/common/Footer";

import ModalContext from "../context/ModalContext";
import DetailsModal from "../components/common/DetailsModal";
import api from "../apisauceInstance";
import { requests } from "../requests";
import { formatCategoryName, pickRandomMovie } from "../utils/utils";

export default function Home() {
  const [bannerMovie, setBannerMovie] = useState(null);
  const [movies, setMovies] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState();

  const fetchMovies = async () => {
    const obj = {};

    for (let request in requests) {
      let categoryName = formatCategoryName(request);
      const { data } = await api.get(requests[request]);
      if (data.results) obj[categoryName] = data.results;
    }

    setMovies(obj);
    setBannerMovie(pickRandomMovie(obj));

    // TODO: Extract interval timer & setup explicit cleanup fn
    setInterval(() => {
      setBannerMovie(pickRandomMovie(obj));
    }, 6000);
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
        <title>Netflix Clone by Sep Motameni</title>
        <meta name="description" content="Netflix Clone by Sep Motameni" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ModalContext.Provider value={{ showModal, closeModal }}>
        <main className="min-h-screen bg-[#141414]">
          <div className="z-50 w-full py-5 bg-yellow-400 ">
            <p className="font-semibold text-center">
              This site is a clone! This is NOT the real Netflix. Do NOT enter
              any real Netflix credentials. I built this for educational
              purposes. -Sep
            </p>
          </div>
          <Navbar currentPage="home" />
          <AnimatePresence>
            {bannerMovie && <Banner movie={bannerMovie} />}
          </AnimatePresence>
          {movies && <Movies movies={movies} />}
        </main>
        <DetailsModal movie={selectedMovie} />
      </ModalContext.Provider>
      <Footer />
    </>
  );
}

// Future features:
// * Sign in page
// * account details component
// * row: pagination, view all, scale and opacity poster
// * maybe SSR the movies data?

// Current:
// * genre  handle
// * Skeleton
// * Use HOC to wrap all pages with details modal and context provider
// * State for my list
