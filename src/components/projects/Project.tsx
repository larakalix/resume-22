import { ProjectProps } from "../../interfaces/Projects";
import { BsGithub } from "react-icons/bs";
import { Title } from "../generic/Title";
import { TitleSize } from "../../interfaces/TitleProps";

export const Project = ({ id, name, github, link }: ProjectProps) => (
    <div className="w-full h-[20rem] flex justify-center items-center bg-blue-200 rounded flex-col">
        <Title title={name} inverted={false} size={TitleSize.extrasmall} />
        <ul className="flex justify-between items-center">
            <li>
                <a href={link} target="_blank" rel="noreferrer" className="flex items-center justify-center px-6 py-3 bg-green-500 text-white text-xl min-h-[4rem] mx-2 rounded">
                    Check it out
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
        <a href={github} target="_blank" rel="noreferrer" className="flex items-center justify-center px-6 py-3 bg-black text-white text-xl min-h-[4rem] mx-2 rounded">
            Go to <BsGithub className="text-white text-xl ml-2" />
        </a>
    </li>
);
