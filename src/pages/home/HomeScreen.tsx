import { motion } from "framer-motion";
import { div_config } from "../../configs/FramerMotion";
import { Banner } from "../../components/home/Banner";
import { Skills } from "../../components/home/Skills";
import { LetsTalkButton } from "../../components/generic/LetsTalkButton";
import { ResumeButton } from "../../components/generic/ResumeButton";

export const HomeScreen = () => {
    return (
        <motion.div {...div_config}>
            <div
                id="Welcome"
                className="min-h-screen flex items-center justify-center flex-col"
            >
                <Banner />

                <div className="mt-12">
                    <LetsTalkButton inverted />
                    {/* <ResumeButton /> */}
                </div>
            </div>
            <div
                id="skills"
                className="min-h-screen flex items-center justify-center flex-col"
            >
                <Skills />
            </div>
        </motion.div>
    );
};
