import type { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import client from "../sanity/client";
import ContactWrap from "../src/components/generic/ContactWrap";
import { StaticPageContentProps } from "../src/interfaces/pages/StaticPageContentProps";
import { PageStaticProps } from "../src/interfaces/PageStaticProps";
import { AboutScreen } from "../src/pages/about/AboutScreen";

const About = ({ content }: StaticPageContentProps) => {
  return (
    <ContactWrap>
      <Head>
        <title>About me</title>
      </Head>
      <AboutScreen content={content} />
    </ContactWrap>
  );
};

export const getServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  const query = `*[ _type == "pageStaticContent"][0]`;
  const result = await client.fetch(query);

  return {
    props: {
      content: result ?? ({} as PageStaticProps),
    },
  };
};

export default About;
