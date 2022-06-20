import Head from "next/head";
import { useState, useEffect } from "react";

import Movies from "../components/Movies";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/common/Footer";

import Splash from "../components/common/Splash";

import api from "../apisauceInstance";
import { requests } from "../requests";
import { formatCategoryName, pickRandomMovie } from "../utils/utils";

export default function Home({ movies }) {
  const [bannerMovie, setBannerMovie] = useState(null);

  const [splashPlaying, setSplashPlaying] = useState(true);

  useEffect(() => {
    setBannerMovie(pickRandomMovie(movies));

    setTimeout(() => {
      setSplashPlaying(false);
    }, 5300);
  }, []);

  return (
    <>
      <Head>
        <title>Netflix Clone by Sep Motameni</title>
        <meta name="description" content="Netflix Clone by Sep Motameni" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-[#141414]">
        {splashPlaying ? (
          <Splash />
        ) : (
          <>
            <Navbar currentPage="home" />
            {/* TODO: Is this necessary? {bannerMovie && <Banner movie={bannerMovie} />} */}
            <Banner movie={bannerMovie} />
            <Movies movies={movies} />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

// TODO: List
// * Sign in page
// * Modal for movie details
// * Row Component arrow handle/pagination
// * Skeleton
// * banner interval timer
// * account details component

// * genre  handle
// * State for my list

// TODO: Too much data being passed to the component.
// https://nextjs.org/docs/messages/large-page-data
export async function getServerSideProps(context) {
  const obj = {};

  for (let request in requests) {
    let categoryName = formatCategoryName(request);

    const { data } = await api.get(requests[request]);
    obj[categoryName] = data.results;
  }

  return {
    props: {
      movies: obj,
    },
  };
}
