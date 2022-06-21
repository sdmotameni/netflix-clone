import Head from "next/head";
import { useState, useEffect } from "react";

import Movies from "../components/Movies";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Credits from "../components/common/Credits";

import api from "../apisauceInstance";
import { requests } from "../requests";
import { formatCategoryName, pickRandomMovie } from "../utils/utils";

import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [bannerMovie, setBannerMovie] = useState(null);
  const [movies, setMovies] = useState(null);

  const fetchMovies = async () => {
    const obj = {};

    for (let request in requests) {
      let categoryName = formatCategoryName(request);
      const { data } = await api.get(requests[request]);
      obj[categoryName] = data.results;
    }

    setMovies(obj);
    setBannerMovie(pickRandomMovie(obj));

    // TODO: Setup counter interval in a better way
    setInterval(() => {
      setBannerMovie(pickRandomMovie(obj));
    }, 6000);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <Head>
        <title>Netflix Clone by Sep Motameni</title>
        <meta name="description" content="Netflix Clone by Sep Motameni" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-[#141414]">
        <Navbar currentPage="home" />
        <AnimatePresence>
          {bannerMovie && <Banner movie={bannerMovie} />}
        </AnimatePresence>
        {movies && <Movies movies={movies} />}
        <Credits />
      </main>
    </>
  );
}

// Future features:
// * Sign in page
// * account details component
// * Row Component arrow handle/pagination
// * maybe SSR the movies data?

// Current:
// * Skeleton
// * Modal for movie details
// * genre  handle
// * fix credits animation
// * State for my list
