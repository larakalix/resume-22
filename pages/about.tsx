import type { NextPage } from "next";
import ContactWrap from "../src/components/generic/ContactWrap";
import { AboutScreen } from "../src/pages/about/AboutScreen";

const About: NextPage = () => {
    return (
        <ContactWrap>
            <AboutScreen />
        </ContactWrap>
    );
};

export default About;
