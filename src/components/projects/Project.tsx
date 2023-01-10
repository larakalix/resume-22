import Image from "next/image";
import { urlFor } from "../../../sanity/builder";
import { ProjectProps } from "../../interfaces/Projects";
import { RiLinkM, RiGithubFill } from "react-icons/ri";
import { Title } from "../generic/Title";
import { TitleSize } from "../../interfaces/TitleProps";

export const Project = ({ name, github, link, banner }: ProjectProps) => (
    <div className="p-8 border-v-border border rounded-v-rounded bg-white dark:bg-black">
        <h2 className="text-black dark:text-white font-bold max-w-2xl text-[1.2rem] md:text-[2rem] leading-noneƒ">
            {name}
        </h2>

        <div className="w-full bg-white rounded-v-rounded mt-4 mb-6 overflow-hidden">
            {banner && urlFor(banner?.asset?._ref).url() && (
                <Image
                    className="w-full h-full rounded-v-rounded"
                    src={urlFor(banner?.asset?._ref).url()}
                    width={520}
                    height={200}
                    alt={name}
                />
            )}
        </div>

        <ul className="flex justify-start items-center space-x-4">
            <li className="my-4 md:my-0">
                <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center w-[4rem] h-[4rem] bg-blue-500 text-white min-h-[4rem] rounded-v-rounded hover:opacity-90"
                >
                    <RiLinkM className="text-[1.8rem]" />
                </a>
            </li>
            {github && (
                <li>
                    <a
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center w-[4rem] h-[4rem] bg-black text-white text-xl min-h-[4rem] rounded-v-rounded invert hover:opacity-90"
                    >
                        <RiGithubFill className="text-white text-[1.8rem]" />
                    </a>
                </li>
            )}
        </ul>
    </div>
);
