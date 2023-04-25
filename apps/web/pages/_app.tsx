import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Router, useRouter } from "next/router";
import Script from "next/script";
import { AnimatePresence } from "framer-motion";
import NProgress from "nprogress";
import { ToastProvider } from "react-toast-notifications";
import { Header } from "../src/components";
import ThemeContext from "../src/context/ThemeContext";
import useTheme from "../src/hooks/useTheme";
import { Footer } from "@ui/kit";

Router.events.on("routeChangeStart", () => NProgress.set(0.5));
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

NProgress.configure({ showSpinner: false });

const { Provider } = ThemeContext;

const disableFrom = ["/cv"];

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
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
            <meta property="og:url" content="https://www.kalixthedev.com" />
            <meta property="og:type" content="website" />
            <meta
              property="og:title"
              content="Fullstack Developer based in Nicaragua"
            />
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
    </ToastProvider>
  );
}

export default MyApp;
