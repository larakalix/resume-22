import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { Footer, Header } from "../src/components";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="bg-gray-100 scroll-smooth">
            <Header />
            <AnimatePresence exitBeforeEnter>
                <Component {...pageProps} />
            </AnimatePresence>
            <Footer />
        </div>
    );
}

export default MyApp;
