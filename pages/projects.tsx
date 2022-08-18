import type { NextPage } from "next";
import Head from "next/head";
import ContactWrap from "../src/components/generic/ContactWrap";
import { ProjectsScreen } from "../src/pages/projects/ProjectsScreen";

const Projects: NextPage = () => {
    return (
        <ContactWrap>
            <Head>
                <title>My projects</title>
            </Head>
            <ProjectsScreen />
        </ContactWrap>
    );
};

export default Projects;
