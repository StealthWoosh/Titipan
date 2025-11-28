import Head from "next/head";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tomoro Coffee</title>
        <meta name="description" content="Landing page Tomoro Coffee" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <main className="flex flex-col">
        <Hero />
        <About />
      </main>
      <Footer />
    </>
  );
}
