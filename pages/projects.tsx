import type { NextPage } from "next";
import ContactWrap from "../src/components/generic/ContactWrap";
import { ProjectsScreen } from "../src/pages/projects/ProjectsScreen";

const Projects: NextPage = () => {
    return (
        <ContactWrap>
            <ProjectsScreen />
        </ContactWrap>
    );
};

export default Projects;
