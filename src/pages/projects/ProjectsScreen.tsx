import { Title } from "../../components/generic/Title";
import { Project } from "../../components/projects/Project";
import { projects } from "../../data/data";
import { ProjectProps } from "../../interfaces/Projects";

export const ProjectsScreen = () => {
    return (
        <div
            id="projects"
            className="min-h-screen flex items-center justify-center flex-col p-8 m-auto md:max-w-5xl lg:max-w-7xl"
        >
            <Title title="Projects" inverted={false} className="mb-[4rem]" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full">
                {projects.map(({ id, ...props }: ProjectProps) => (
                    <Project key={id} {...{ id, ...props }} />
                ))}
            </div>
        </div>
    );
};
