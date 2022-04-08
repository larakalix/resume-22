import { Paragraph } from "../generic/Paragraph";
import { Title } from "../generic/Title";
import { SkillsProps } from "../../interfaces/SkillsProps";
import { skills } from "../../data/data";

export const Skills = () => {
    return (
        <div className="w-full p-12 m-auto flex justify-center items-center flex-col">
            <Title title="Skills" inverted={false} className="mb-12" />

            <div className="grid grid-cols-2 max-w-[80vw]">
                {skills.map(({ title, description }: SkillsProps) => (
                    <div
                        key={title}
                        className="flex justify-start items-center flex-col p-6"
                    >
                        <h1 className="uppercase text-6xl font-bold w-full">
                            {title}
                        </h1>
                        <Paragraph
                            text={description}
                            className="w-full mt-4 pr-8"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
