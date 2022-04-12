import { motion } from "framer-motion";
import { Paragraph } from "../generic/Paragraph";
import { Title } from "../generic/Title";
import { SkillsProps } from "../../interfaces/SkillsProps";
import { skills } from "../../data/data";

export const Skills = () => {
    return (
        <div className="w-full p-12 m-auto flex justify-center items-center flex-col">
            <Title title="Skills" inverted={false} className="mb-12" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-[100vw] md:max-w-[80vw]">
                {skills.map(({ title, description }: SkillsProps) => (
                    <motion.div
                        key={title}
                        className="flex justify-start items-center flex-col p-6"
                        initial={{ padding: "1rem" }}
                        animate={{
                            padding: "1.5rem",
                        }}
                    >
                        <h1 className="uppercase text-5xl md:text-6xl font-bold w-full text-center md:text-left text-black dark:text-white">
                            {title}
                        </h1>
                        <Paragraph
                            text={description}
                            className="w-full mt-4 pr-0 md:pr-8"
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
