/* eslint-disable react-hooks/exhaustive-deps */
import type { GetServerSidePropsContext } from "next";
import Head from "next/head";
import client from "../sanity/client";
import ContactWrap from "../src/components/generic/ContactWrap";
import { useDateInfo } from "../src/hooks/useDateInfo";
import { HeaderLinkProps } from "../src/interfaces";
import { HomePageProps } from "../src/interfaces/pages/HomeProps";
import { HomeScreen } from "../src/pages";

interface Props extends HomePageProps {
    links: HeaderLinkProps[];
    notFound: boolean;
}

const Home = ({ links, skills, notFound }: Props) => {
    const { weekDay } = useDateInfo();

    const day = weekDay();

    if (notFound)
        return (
            <div className="w-full h-screen flex items-center justify-center">
                Not Found
            </div>
        );

    return (
        <ContactWrap>
            <Head>
                <title>Hello stranger, happy {day ?? "day"}!</title>
            </Head>
            <HomeScreen skills={skills} />
        </ContactWrap>
    );
};

export const getServerSideProps = async ({
    req,
}: GetServerSidePropsContext) => {
    const links_query = `*[ _type == "headerLink"]`;
    const links = await client.fetch(links_query);

    const skills_query = `*[ _type == "skills"]`;
    const skills = await client.fetch(skills_query);

    if (!skills) return { props: null, notFound: true };

    return {
        props: {
            links,
            skills,
            notFound: false,
        },
    };
};

export default Home;
