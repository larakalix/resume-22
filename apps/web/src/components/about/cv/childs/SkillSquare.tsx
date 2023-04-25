import { CvCheck } from "./CvCheck";

type Props = {
  title: string;
  skills: string[];
};

export const SkillSquare = ({ title, skills }: Props) => {
  return (
    <div className=" rounded-v-rounded py-1 text-white flex flex-col justify-start">
      <h4 className="text-[1rem] font-semibold uppercase">{title}</h4>

      <ul className="py-2">
        {skills.map((skill, index) => (
          <li
            key={`skill-${index}`}
            className="text-[.8rem] flex items-center gap-2 pb-2"
          >
            <CvCheck />

            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};
