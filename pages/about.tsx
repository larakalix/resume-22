import type { NextPage } from "next";
import Head from "next/head";
import ContactWrap from "../src/components/generic/ContactWrap";
import { AboutScreen } from "../src/pages/about/AboutScreen";

const About: NextPage = () => {
    return (
        <ContactWrap>
            <Head>
                <title>About me</title>
            </Head>
            <AboutScreen />
        </ContactWrap>
    );
};

export default About;
