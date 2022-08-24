import type { GetServerSidePropsContext } from "next";
import Head from "next/head";
import client from "../../sanity/client";
import ContactWrap from "../../src/components/generic/ContactWrap";
import { SinglePostPageProps } from "../../src/interfaces/pages/BlogPageProps";
import { SinglePostScreen } from "../../src/pages/post/SinglePostScreen";

export const SinglePost = ({ post }: SinglePostPageProps) => {
    return (
        <ContactWrap>
            <Head>
                <title>{post.title}</title>
            </Head>
            <SinglePostScreen post={post} />
        </ContactWrap>
    );
};

export const getServerSideProps = async ({
    query: { slug },
}: GetServerSidePropsContext) => {
    const query = `*[_type == "post" && slug.current == $slug][0]{
        _id, _createdAt, title, body, showNewsletter, categories[]->{_id,title}, author->{_id,name,image} }`;
    const result = await client.fetch(query, { slug });

    return {
        props: {
            post: result,
            slug,
        },
    };
};

export default SinglePost;
