import type { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { getCategories } from "../../src/api/categories/getCategories";
import { getPosts } from "../../src/api/posts/getPosts";
import ContactWrap from "../../src/components/generic/ContactWrap";
import { BlogPageProps } from "../../src/interfaces/pages/BlogPageProps";
import { PostScreen } from "../../src/pages/post/PostScreen";

const Blog = ({ posts, categories }: BlogPageProps) => {
  return (
    <ContactWrap>
      <Head>
        <title>Blog</title>
      </Head>
      <PostScreen title="All Posts" posts={posts} categories={categories} />
    </ContactWrap>
  );
};

export const getServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  const posts = await getPosts({ slice: 20 });
  const categories = await getCategories();

  return {
    props: {
      categories,
      posts,
    },
  };
};

export default Blog;
