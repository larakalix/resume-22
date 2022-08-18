import { Title } from "../../components/generic/Title";
import { Project } from "../../components/projects/Project";
import { ProjectProps } from "../../interfaces/Projects";
import { motion } from "framer-motion";
import { div_config } from "../../configs/FramerMotion";
import { ProjectPageProps } from "../../interfaces/pages/ProjectProps";

export const ProjectsScreen = ({ projects }: ProjectPageProps) => {
    return (
        <motion.div
            id="projects"
            className="min-h-screen flex items-center justify-center flex-col p-8 m-auto md:max-w-5xl lg:max-w-7xl"
            {...div_config}
        >
            <Title title="Projects" inverted={false} className="mb-[4rem]" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full">
                {projects?.map(({ _id, ...props }: ProjectProps) => (
                    <Project key={_id} {...{ _id, ...props }} />
                ))}
            </div>
        </motion.div>
    );
};
