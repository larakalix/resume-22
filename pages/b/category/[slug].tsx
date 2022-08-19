import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import client from "../../../sanity/client";
import ContactWrap from "../../../src/components/generic/ContactWrap";
import { BlogPageProps } from "../../../src/interfaces/pages/BlogPageProps";
import { PostScreen } from "../../../src/pages/post/PostScreen";

interface Props extends BlogPageProps {
    slug: string;
}

const CategoryBlog = ({ posts, categories, slug }: Props) => {
    const title =
        categories.find(
            ({ slug: category_slug }) => category_slug.current === slug
        )?.title ?? "";

    return (
        <ContactWrap>
            <Head>
                <title>Blog - {title}</title>
            </Head>
            <PostScreen title={title} posts={posts} categories={categories} />
        </ContactWrap>
    );
};

export const getServerSideProps = async ({
    query: { slug },
}: GetServerSidePropsContext) => {
    const posts_query = `*[ _type == "post" && $slug in categories[]->slug.current] | order(publishedAt desc){
        _id, _createdAt, publishedAt, title, slug, categories[]->{_id,title,slug}, author->{_id,name,image} }`;
    const posts = await client.fetch(posts_query, { slug });

    const categories_query = `*[_type == "category"] | order(order asc)`;
    const categories = await client.fetch(categories_query);

    return {
        props: {
            slug,
            categories,
            posts,
        },
    };
};

export default CategoryBlog;
