import type { AppProps } from "next/app";
import "../styles/global.css";
import { Footer } from "@ui/kit";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="dark">
      <div className="bg-gray-100 dark:bg-v-black scroll-smooth transition-colors">
        <Component {...pageProps} />;
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
