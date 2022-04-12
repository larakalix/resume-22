import type { NextPage } from "next";
import Head from "next/head";
import ContactWrap from "../src/components/generic/ContactWrap";
import { HomeScreen } from "../src/pages";

const Home: NextPage = () => {
    return (
        <ContactWrap>
            <Head>
                <title>Hello stranger!</title>
            </Head>
            <HomeScreen />
        </ContactWrap>
    );
};

export default Home;
