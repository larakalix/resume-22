import "../styles/globals.css";
import Head from "next/head";
import { Router, useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import NProgress from "nprogress";
import { Footer, Header } from "../src/components";
import ThemeContext from "../src/context/ThemeContext";
import useTheme from "../src/hooks/useTheme";
import Script from "next/script";

import App from "next/app";
import type { AppProps, AppContext } from "next/app";

Router.events.on("routeChangeStart", () => NProgress.set(0.5));
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

NProgress.configure({ showSpinner: false });

const { Provider } = ThemeContext;

const disableFrom = ["/cv"];

type TProps = Pick<AppProps, "Component" | "pageProps"> & {
    title: string;
};

function MyApp({ Component, pageProps, title }: TProps) {
    const router = useRouter();
    const { links, theme, changeTheme } = useTheme();

    return (
        <>
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
                        <meta
                            property="og:url"
                            content="https://www.kalixthedev.com"
                        />
                        <meta property="og:type" content="website" />
                        <meta property="og:title" content={title} />
                        <meta
                            property="og:description"
                            content="I'm Ivan Lara, I build digital products based on your business needs."
                        />
                        <meta
                            property="og:image"
                            content="https://www.kalixthedev.com/preview.png"
                        />

                        <link rel="shortcut icon" href="/favicon.png" />
                    </Head>

                    <div className="bg-gray-100 dark:bg-v-black scroll-smooth transition-colors">
                        {!disableFrom.includes(router.pathname) && <Header />}

                        <AnimatePresence exitBeforeEnter>
                            <Component {...pageProps} />
                        </AnimatePresence>

                        {!disableFrom.includes(router.pathname) && <Footer />}
                    </div>
                </div>
            </Provider>
        </>
    );
}

MyApp.getInitialProps = async (context: AppContext) => {
    const ctx = await App.getInitialProps(context);

    return { ...ctx, title: "Fullstack Developer based in Florida" };
};

export default MyApp;
