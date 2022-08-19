import type { GetServerSidePropsContext } from "next";
import Head from "next/head";
import client from "../../sanity/client";
import ContactWrap from "../../src/components/generic/ContactWrap";
import { BlogPageProps } from "../../src/interfaces/pages/BlogPageProps";
import { PostScreen } from "../../src/pages/post/PostScreen";

const Blog = ({ posts, categories }: BlogPageProps) => {
    console.log("posts", posts);
    console.log("categories", categories);
    return (
        <ContactWrap>
            <Head>
                <title>About me</title>
            </Head>
            <PostScreen
                title="All Posts"
                posts={posts}
                categories={categories}
            />
        </ContactWrap>
    );
};

export const getServerSideProps = async ({
    req,
}: GetServerSidePropsContext) => {
    const posts_query = `*[ _type == "post"] | order(publishedAt desc){
        _id, _createdAt, publishedAt, title, slug, categories[]->{_id,title,slug}, author->{_id,name,image} }`;
    const posts = await client.fetch(posts_query);

    const categories_query = `*[_type == "category"] | order(order asc)`;
    const categories = await client.fetch(categories_query);

    return {
        props: {
            categories,
            posts,
        },
    };
};

export default Blog;
