import "../styles/globals.scss";
import "normalize.css";
import { useEffect } from "react";
import { loadFont } from "../utils/loadFont";
import "keen-slider/keen-slider.min.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    setTimeout(() => {
      loadFont("/fonts/fonts.css");
    }, 0);
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
