import Head from "next/head";

import Navbar from "../components/Navbar";
import Movies from "../components/Movies";
import Footer from "../components/common/Footer";

export default function MyList({ movies = {} }) {
  return (
    <>
      <Head>
        <title>My List - Netflix Clone by Sep Motameni</title>
        <meta name="description" content="Netflix Clone by Sep Motameni" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-[#141414]">
        <Navbar currentPage="mylist" />
        <Movies movies={movies} />
      </main>
      <Footer />
    </>
  );
}
