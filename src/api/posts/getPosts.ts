import client from "../../../sanity/client";
import { PostProps } from "../../interfaces";

interface GetPostProps {
    slug: string | string[] | undefined;
}

interface GetPostsProps {
    slice: number;
}

export const getPosts = async ({
    slice,
}: GetPostsProps): Promise<PostProps[]> => {
    const posts_query = `*[ _type == "post"][0..${slice}] | order(publishedAt desc){
        _id, _createdAt, publishedAt, title, slug, categories[]->{_id,title,slug}, author->{_id,name,image} }`;

    return (await client.fetch(posts_query)) as Array<PostProps>;
};

export const getPost = async ({ slug }: GetPostProps): Promise<PostProps> => {
    const query = `*[_type == "post" && slug.current == $slug][0]{
        _id, _createdAt, title, body, banner, content, showNewsletter, showIndexes, relatedPosts[]->{_id,title,slug,_createdAt}, tags, categories[]->{_id,title}, author->{_id,name,image}
    }`;
    return await client.fetch(query, { slug });
};
