import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import { Footer, Header } from "../src/components";
import ThemeContext from "../src/context/ThemeContext";
import useTheme from "../src/hooks/useTheme";

const { Provider } = ThemeContext;

function MyApp({ Component, pageProps }: AppProps) {
    const { theme, changeTheme } = useTheme();

    return (
        <Provider value={{
            theme,
            changeTheme,
        }}>
            <div className={`${theme}`}>
                <Head>
                    <link rel="shortcut icon" href="/favicon.png" />
                </Head>
                <div className="bg-gray-100 dark:bg-black scroll-smooth transition-colors">
                    <Header />
                    <AnimatePresence exitBeforeEnter>
                        <Component {...pageProps} />
                    </AnimatePresence>
                    <Footer />
                </div>
            </div>
        </Provider>
    );
}

export default MyApp;
