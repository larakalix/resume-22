import Image from "next/image";
import Link from "next/link";
import { RiGithubFill, RiLinkM } from "react-icons/ri";
import { urlFor } from "../../../sanity/builder";
import { HomePageProps, ProjectProps } from "../../interfaces";
import { Title } from "../generic";

export const Projects = ({ projects }: Pick<HomePageProps, "projects">) => {
  return (
    <div className="w-full p-12 m-auto flex justify-center items-center flex-col">
      <Title title="Projects" inverted={false} className="mb-12" />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-4 xl:gap-2 w-full mb-2">
        {projects?.map(({ _id, ...props }) => (
          <Project key={_id} {...{ _id, ...props }} />
        ))}
        {projects.length > 0 && (
          <Link
            href="/projects"
            passHref
            className="border-v-border border rounded-v-rounded flex items-center justify-center hover:opacity-60"
          >
            <span className="text-black dark:text-white px-2 mt-8">
              More projects
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};

const Project = ({ name, link, github, banner }: ProjectProps) => {
  return (
    <div className="p-8 border-v-border border rounded-v-rounded bg-white dark:bg-black">
      <h2 className="text-black dark:text-white font-bold max-w-2xl text-[1.8rem] md:text-[2rem] xl:text-[1.2rem] leading-noneƒ">
        {name}
      </h2>

      <div className="w-full bg-white rounded-v-rounded mt-4 mb-6 overflow-hidden">
        <Image
          className="w-full h-full rounded-v-rounded"
          src={urlFor(banner?.asset?._ref).url()}
          width={520}
          height={200}
          alt={name}
        />
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
};
