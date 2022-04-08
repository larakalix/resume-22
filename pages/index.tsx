import type { NextPage } from "next";
import ContactWrap from "../src/components/generic/ContactWrap";
import { HomeScreen } from "../src/pages";

const Home: NextPage = () => {
    return (
        <ContactWrap>
            <HomeScreen />
        </ContactWrap>
    );
};

export default Home;
