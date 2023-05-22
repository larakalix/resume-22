import { CvCheck } from "./CvCheck";

type Props = {
    title: string;
    place: string;
    skills: string[];
    brief: string[];
};

export const ExpertiseSquare = ({ title, place, skills, brief }: Props) => {
    return (
        <div className="pb-4 flex flex-col gap-4 text-v-black dark:text-white border-b border-b-gray-700 last:border-none">
            <div className="pb-4">
                <h1 className="text-[.9rem] font-semibold">{title}</h1>
                <span className="text-[.8rem] font-light italic block mt-[-2px]">
                    {place}
                </span>

                <section className="flex flex-col gap-2 mt-4">
                    {brief.map((text, index) => (
                        <p key={`par-brief-${index}`} className="text-[.8rem]">
                            {text}
                        </p>
                    ))}
                </section>
            </div>

            <ul className="space-y-1">
                {skills.map((skill, index) => (
                    <li
                        key={`expertise-square-skill-${index}`}
                        className="flex gap-2 items-center text-[.8rem]"
                    >
                        <CvCheck />
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
};
