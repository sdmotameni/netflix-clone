import Head from "next/head";

import Movies from "../components/Movies";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/common/Footer";

import api from "../apisauceInstance";
import { requests } from "../requests";
import { formatCategoryName, pickRandomMovie } from "../utils";
import { useState, useEffect } from "react";

export default function Home({ movies }) {
  const [bannerMovie, setBannerMovie] = useState(null);

  useEffect(() => {
    setBannerMovie(pickRandomMovie(movies));

    // TODO: Implement this the right way
    // setInterval(() => {
    //   setBannerMovie(pickRandomMovie(movies));
    // }, 9000);
  }, []);

  return (
    <>
      <Head>
        <title>Netflix Clone by Sep Motameni</title>
        <meta name="description" content="Netflix Clone by Sep Motameni" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-[#141414]">
        <Navbar />
        {bannerMovie && <Banner movie={bannerMovie} />}
        <Movies movies={movies} />
      </main>
      {/* TODO: Do cool animation that moves around page for footer */}
      <Footer />
    </>
  );
}

// TODO: List
// * Modal for movie details
// * Row Component
// * State for my list
// * Sign in page
// * Netflix intro animation
// * Skeleton

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
