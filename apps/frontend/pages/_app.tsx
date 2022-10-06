import "../styles/globals.css";
import PageTransition from "../components/PageTransition";
import Navbar from "../components/Navbar";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <PageTransition>
        <Component {...pageProps} />
      </PageTransition>
    </>
  );
}

export default MyApp;
