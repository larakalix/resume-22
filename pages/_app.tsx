import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { Footer, Header } from "../src/components";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.png" />
            </Head>
            <div className="bg-gray-100 scroll-smooth">
                <Header />
                <AnimatePresence exitBeforeEnter>
                    <Component {...pageProps} />
                </AnimatePresence>
                <Footer />
            </div>
        </>
    );
}

export default MyApp;
