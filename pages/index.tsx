import type { NextPage } from "next";
import Head from "next/head";
import ContactWrap from "../src/components/generic/ContactWrap";
import { useDateInfo } from "../src/hooks/useDateInfo";
import { HomeScreen } from "../src/pages";

const Home: NextPage = () => {
    const { weekDay } = useDateInfo();

    return (
        <ContactWrap>
            <Head>
                <title>Hello stranger, happy { weekDay() }!</title>
            </Head>
            <HomeScreen />
        </ContactWrap>
    );
};

export default Home;
