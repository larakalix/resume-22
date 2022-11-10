import { PostProps } from "../PostProps";
import { ProjectProps } from "../Projects";
import { SkillsProps } from "../SkillsProps";

export interface HomePageProps {
    skills: SkillsProps[];
    posts: PostProps[];
    projects: ProjectProps[];
}
