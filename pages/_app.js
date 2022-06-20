import { useEffect, useState } from "react";
import Splash from "../components/common/Splash";
import "../styles/globals.css";
// TODO: transform into component level css using next modules
import "../styles/splash.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

/* NOTE from Nextjs doc:
These styles (styles.css) will apply to
all pages and components in your application. Due to the global nature of stylesheets, 
and to avoid conflicts, you may only import them inside pages/_app.js.

In development, expressing stylesheets this way allows your styles to be hot reloaded 
as you edit them—meaning you can keep application state.
*/

function MyApp({ Component, pageProps }) {
  const [splashPlaying, setSplashPlaying] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplashPlaying(false);
    }, 5300);
  }, []);

  return splashPlaying ? <Splash /> : <Component {...pageProps} />;
}

export default MyApp;
