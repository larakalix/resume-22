import { HeadingTag } from "../../enums";
import { PostProps } from "../../interfaces/PostProps";
import { Header } from "../generic";
import { Post } from "../generic/post/Post";

interface Props {
    posts: PostProps[];
    title: string;
}

export const Posts = ({ posts, title }: Props) => {
    return (
        <div className="w-full">
            <Header
                _key="post_title"
                text={title}
                type={HeadingTag.H1}
                className="text-[2rem] text-white px-0 md:px-8 pb-8 font-semibold leading-[-.049375rem]"
            />
            {posts.length > 0 ? (
                posts?.map(({ _id, ...props }: PostProps) => (
                    <Post key={_id} {...{ _id, ...props }} />
                ))
            ) : (
                <NotPostsFound />
            )}
        </div>
    );
};

const NotPostsFound = () => {
    return (
        <div className="text-center">
            <h1 className="text-v-gray p-12 text">
                There is nothing to show right now
            </h1>
        </div>
    );
};
