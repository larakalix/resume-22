import { ProjectProps } from "../../interfaces/Projects";
import { RiLinkM, RiGithubFill } from "react-icons/ri";
import { Title } from "../generic/Title";
import { TitleSize } from "../../interfaces/TitleProps";

export const Project = ({ id, name, github, link }: ProjectProps) => (
    <div className="w-full h-[20rem] flex justify-center items-center bg-blue-200 dark:bg-purple-300 rounded flex-col">
        <Title title={name} inverted={false} size={TitleSize.small} />
        <ul className="flex  justify-between items-center">
            <li className="my-4 md:my-0">
                <a href={link} target="_blank" rel="noreferrer" className="flex items-center justify-center w-[4rem] h-[4rem] bg-blue-500 text-white min-h-[4rem] mx-2 rounded">
                    <RiLinkM className="text-[1.8rem]" />
                </a>
            </li>
            {
                github ? <GithubButton github={github} /> : null
            }
        </ul>
    </div>
);

const GithubButton = ({ github }: { github: string }) => (
    <li>
        <a href={github} target="_blank" rel="noreferrer" className="flex items-center justify-center w-[4rem] h-[4rem] bg-black text-white text-xl min-h-[4rem] mx-2 rounded">
            <RiGithubFill className="text-white text-[1.8rem]" />
        </a>
    </li>
);
