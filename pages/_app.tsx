import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Footer, Header } from "../src/components";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="bg-gray-100">
            <Header />
            <main>
                <Component {...pageProps} />
            </main>
            <Footer />
        </div>
    );
}

export default MyApp;
