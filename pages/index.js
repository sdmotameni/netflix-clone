import Head from "next/head";

import Movies from "../components/Movies";
import Banner from "../components/Banner";

import api from "../apisauceInstance";
import requests from "../requests";
import { formatCategoryName, pickRandomMovie } from "../utils";
import { useState, useEffect } from "react";

export default function Home({ movies }) {
  const [bannerMovie, setBannerMovie] = useState(null);

  useEffect(() => {
    setBannerMovie(pickRandomMovie(movies));
  }, []);

  return (
    <div>
      <Head>
        <title>Netflix Clone by Sep Motameni</title>
        <meta name="description" content="Netflix Clone by Sep Motameni" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-[#141414]">
        {bannerMovie && <Banner movie={bannerMovie} />}
        <div className="px-24">
          <Movies movies={movies} />
        </div>
      </main>
    </div>
  );
}

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
