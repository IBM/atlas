import { useEffect } from "react";
import { Header } from "../components/Header";
import "styles/carbon.scss";
import "../styles/globals.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    async function loadHas() {
      const cssHasPseudo = (await import("css-has-pseudo/browser")).default;
      console.log("seu loaded");
      cssHasPseudo(document, { hover: true, debug: true });
    }
    loadHas();
  });
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
