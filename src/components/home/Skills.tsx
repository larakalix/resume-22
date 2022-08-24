import { motion } from "framer-motion";
import { Paragraph } from "../generic/Paragraph";
import { Title } from "../generic/Title";
import { SkillsProps } from "../../interfaces/SkillsProps";
import { HomePageProps } from "../../interfaces/pages/HomeProps";

export const Skills = ({ skills }: HomePageProps) => {
    return (
        <div className="w-full p-12 m-auto flex justify-center items-center flex-col">
            <Title title="Skills" inverted={false} className="mb-12" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-[100vw] md:max-w-[80vw]">
                {skills?.map(({ _id: id, name, description }: SkillsProps) => (
                    <motion.div
                        key={id}
                        className="flex justify-start items-center flex-col p-6 rounded hover:bg-white dark:hover:bg-blue-500 transition-colors"
                        initial={{ padding: "1rem" }}
                        animate={{
                            padding: "1.5rem",
                        }}
                    >
                        <h1 className="uppercase text-[1.8rem] md:text-[3.2rem] font-bold w-full text-center md:text-left text-black dark:text-white">
                            {name}
                        </h1>
                        <Paragraph
                            _key={id}
                            text={description}
                            className="w-full mt-4 pr-0 md:pr-8"
                            markDefs={[]}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
