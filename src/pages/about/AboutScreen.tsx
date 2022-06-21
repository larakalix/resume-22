import { Paragraph } from "../../components/generic/Paragraph";
import { Title } from "../../components/generic/Title";
import { motion } from "framer-motion";
import { div_config } from "../../configs/FramerMotion";
import { about } from "../../data/data";

export const AboutScreen = () => {
    return (
        <motion.div
            id="about"
            className="min-h-screen flex items-center justify-center flex-col p-8 m-auto md:max-w-5xl lg:max-w-7xl"
            {...div_config}
        >
            <Title
                title="My approach"
                inverted={false}
                className="mb-[2rem] md:mb-[4rem]"
            />

            <div className="max-w-full md:max-w-5xl">
                {about.map((item, index) => (
                    <Paragraph key={`paragraph-${index}`} text={item} />
                ))}
            </div>
        </motion.div>
    );
};
