import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Router } from "next/router";
import { AnimatePresence } from "framer-motion";
import NProgress from "nprogress";
import { ToastProvider } from "react-toast-notifications";
import { Footer, Header } from "../src/components";
import ThemeContext from "../src/context/ThemeContext";
import useTheme from "../src/hooks/useTheme";
import Script from "next/script";

Router.events.on("routeChangeStart", () => NProgress.set(0.5));
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

NProgress.configure({ showSpinner: false });

const { Provider } = ThemeContext;

function MyApp({ Component, pageProps }: AppProps) {
    const { links, theme, changeTheme } = useTheme();

    return (
        <ToastProvider>
            <Provider
                value={{
                    links,
                    theme,
                    changeTheme,
                }}
            >
                <div className={`${theme}`}>
                    <Script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                                page_path: window.location.pathname,
                                });
                            `,
                        }}
                    />

                    <Head>
                        <link rel="shortcut icon" href="/favicon.png" />
                    </Head>

                    <div className="bg-gray-100 dark:bg-v-black scroll-smooth transition-colors">
                        <Header />
                        <AnimatePresence exitBeforeEnter>
                            <Component {...pageProps} />
                        </AnimatePresence>
                        <Footer />
                    </div>
                </div>
            </Provider>
        </ToastProvider>
    );
}

export default MyApp;
