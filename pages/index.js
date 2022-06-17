import Head from "next/head";
import { useState, useEffect } from "react";

import Movies from "../components/Movies";

import api from "../apisauceInstance";
import requests from "../requests";
import formatCategoryName from "../utils/formatCategoryName";

export default function Home({ movies }) {
  return (
    <div>
      <Head>
        <title>Netflix Clone by Sep Motameni</title>
        <meta name="description" content="Netflix Clone by Sep Motameni" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-[#141414]">
        <div className="px-24">
          <Movies movies={movies} />
        </div>
      </main>
    </div>
  );
}

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
