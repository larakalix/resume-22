import type { GetServerSidePropsContext } from "next";
import Head from "next/head";
import client from "../../sanity/client";
import { getPost } from "../../src/api/posts/getPosts";
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
    const result = await getPost({ slug });

    return {
        props: {
            post: result,
            slug,
        },
    };
};

export default SinglePost;
