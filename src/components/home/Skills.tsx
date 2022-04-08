import { Paragraph } from "../generic/Paragraph";
import { Title } from "../generic/Title";

interface Props {
    title: string;
    description: string;
}

const skills: Props[] = [
    {
        title: "Frontend",
        description:
            "Design user interfaces with frameworks/libraries like Angular or ReactJS (and TypeScript), with functionality based on user needs for improve workflows efficiency.",
    },
    {
        title: "Backend",
        description:
            "Software Engineer who love to build business logic solutions, with solid structured applications/services and a range of techs like sql and no-sql databases, ORM tools like Entity Framework Core or RepoDB for data driven, and convenient architechture.",
    },
    {
        title: "Mobile",
        description:
            "User experience based on hybrid mobile technologies like React Native or Flutter, in order to develop minimal but funcional applications.",
    },
    {
        title: "DevOps",
        description:
            "Apps update, building, and scaling with automated infrastructures like DigitalOcean, Azure DevOps, Vercel or Netlify for reduce depoyment times.",
    },
];

export const Skills = () => {
    return (
        <div className="w-full p-12 m-auto flex justify-center items-center flex-col">
            <Title title="Skills" inverted={false} className="mb-12" />

            {skills.map(({ title, description }: Props) => (
                <div
                    key={title}
                    className="flex justify-center items-center flex-col w-[80vw]"
                >
                    <h1 className="uppercase text-6xl font-bold w-full">
                        {title}
                    </h1>
                    <Paragraph text={description} className="w-full mt-4" />
                </div>
            ))}
        </div>
    );
};
