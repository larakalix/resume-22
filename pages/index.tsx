import type { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import client from "../sanity/client";
import ContactWrap from "../src/components/generic/ContactWrap";
import { useDateInfo } from "../src/hooks/useDateInfo";
import { HomePageProps } from "../src/interfaces/pages/HomeProps";
import { HomeScreen } from "../src/pages";

interface Props extends HomePageProps {
    notFound: boolean;
}

const Home = ({ skills, notFound }: Props) => {
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
    const query = `*[ _type == "skills"]`;
    const result = await client.fetch(query);

    if (!result) return { props: null, notFound: true };

    return {
        props: {
            skills: result,
            notFound: false,
        },
    };
};

export default Home;
