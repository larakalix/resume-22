import type { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import client from "../sanity/client";
import ContactWrap from "../src/components/generic/ContactWrap";
import { ProjectPageProps } from "../src/interfaces/pages/ProjectProps";
import { ProjectsScreen } from "../src/pages/projects/ProjectsScreen";

const Projects = ({ projects }: ProjectPageProps) => {
    return (
        <ContactWrap>
            <Head>
                <title>My projects</title>
            </Head>
            <ProjectsScreen projects={projects} />
        </ContactWrap>
    );
};

export const getServerSideProps = async ({
    req,
}: GetServerSidePropsContext) => {
    const query = `*[ _type == "project"] | order(order)`;
    const result = await client.fetch(query);

    return {
        props: {
            projects: result ?? ([] as ProjectPageProps["projects"]),
        },
    };
};

export default Projects;
