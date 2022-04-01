import type { NextPage } from "next";
import HomeScreen from "../src/pages/home/HomeScreen";

const Home: NextPage = () => {
    return (
        <div className="bg-gray-100">
            <HomeScreen />
        </div>
    );
};

export default Home;
