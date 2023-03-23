/* eslint-disable react-hooks/exhaustive-deps */
import type { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { getLinks } from "../src/api/links/getLinks";
import { getPosts } from "../src/api/posts/getPosts";
import { getProjects } from "../src/api/projects/getProjects";
import { getSkills } from "../src/api/skills/getSkills";
import ContactWrap from "../src/components/generic/ContactWrap";
import { HeaderLinkProps } from "../src/interfaces";
import { HomePageProps } from "../src/interfaces/pages/HomeProps";
import { HomeScreen } from "../src/pages";

import { Button } from "@ui/kit";

interface Props extends HomePageProps {
  links: HeaderLinkProps[];
  notFound: boolean;
}

const Home = ({ skills, posts, projects, notFound }: Props) => {
  if (notFound)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        Not Found
      </div>
    );

  return (
    <ContactWrap>
      <Head>
        <title>Hello stranger!</title>
      </Head>

      <div className="w-full flex justify-center my-10">
        <Button>
          <span>Hello stranger 👨‍💻</span>
        </Button>
      </div>

      <HomeScreen posts={posts} skills={skills} projects={projects} />
    </ContactWrap>
  );
};

export const getServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  const links = await getLinks();
  const skills = await getSkills();
  const posts = await getPosts({ slice: 3 });
  const projects = await getProjects({ highlight: true });

  if (!skills) return { props: null, notFound: true };

  return {
    props: {
      links,
      skills,
      posts,
      projects,
      notFound: false,
    },
  };
};

export default Home;
