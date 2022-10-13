import "../styles/globals.css";
import PageTransition from "../components/PageTransition";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <PageTransition>
        <Component {...pageProps} />
      </PageTransition>
    </>
  );
}

export default MyApp;
