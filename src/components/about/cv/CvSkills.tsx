import { EducationSquare } from "./childs/EducationSquare";
import { SkillSquare } from "./childs/SkillSquare";
import { FiBook, FiHome } from "react-icons/fi";

const content = {
    skills: [
        {
            title: "Frontend",
            skills: [
                "HTML",
                "CSS (SASS, TailwindCSS, BulmaCSS)",
                "Angular",
                "React.js (NextJS, GatsbyJS, Astro)",
            ],
        },
        {
            title: "Backend",
            skills: [
                ".NET (Core, NET6)",
                ".NET Entity Framework",
                "SQL (MSSQL, PostgresSQL)",
                "NodeJS (NestJS)",
            ],
        },
        {
            title: "Tools",
            skills: [
                "VS Code",
                "Git (Github, Gitlab)",
                "DevOps (Azure)",
                "Figma",
            ],
        },
        {
            title: "Mobile",
            skills: ["React Native", "Flutter"],
        },
    ],
    education: [
        {
            title: "System Engineering",
            place: "Universidad Politecnica de Nicaragua",
            icon: FiHome,
        },
        {
            title: "Microsoft: 70-480",
            place: "Programming in HTML5 with JavaScript and CSS3",
            icon: FiBook,
        },
    ],
};

export const CvSkills = () => {
    return (
        <div className="bg-v-dark-purple px-12 pt-5 pb-10 rounded-v-rounded flex flex-col gap-8 max-w-full md:max-w-sm">
            <section>
                <h3 className="uppercase text-[1.8rem] font-bold py-4 text-v-black dark:text-white">
                    Summary
                </h3>

                <div className="flex flex-col gap-4 text-[.8rem] text-v-black dark:text-white">
                    <p>
                        With over 7 years of expertise, I&apos;m a Fullstack
                        Developer, with a massive passion for coding, in order
                        to perform user experience. I can help you to reach your
                        goals, by providing a high-quality product developing
                        your ideas.
                    </p>

                    <p>
                        I have experience working on custom applications,
                        e-commerce, micro websites, and Rest APIs. I&apos;m open
                        to grabbing another kind of knowledge with respect to
                        other programming languages
                    </p>
                </div>
            </section>

            <section>
                <h3 className="uppercase text-[1.8rem] font-bold py-4 text-v-black dark:text-white">
                    Skills
                </h3>

                <div className="grid grid-cols-2 gap-4">
                    {content.skills.map((skill, index) => (
                        <SkillSquare
                            key={`skill-square-${index}`}
                            title={skill.title}
                            skills={skill.skills}
                        />
                    ))}
                </div>
            </section>

            <section>
                <h3 className="uppercase text-[1.8rem] font-bold py-4 text-v-black dark:text-white">
                    Education
                </h3>

                <div className="grid grid-cols-1 gap-4">
                    {content.education.map((education, index) => (
                        <EducationSquare
                            key={`ed-square-${index}`}
                            title={education.title}
                            place={education.place}
                            icon={education.icon}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};
