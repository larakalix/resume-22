import type { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { PageStaticProps, StaticPageContentProps } from "../src/interfaces";
import { CvScreen } from "../src/pages/about/CvScreen";

const Cv = ({ content }: StaticPageContentProps) => {
    return (
        <>
            <Head>
                <title>About me</title>
            </Head>

            <CvScreen />
        </>
    );
};

export const getServerSideProps = async ({
    req,
}: GetServerSidePropsContext) => {
    return {
        props: {
            content: {} as PageStaticProps,
        },
    };
};

export default Cv;
