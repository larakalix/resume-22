import { BlogPageProps } from "../../interfaces/pages/BlogPageProps";
import { motion } from "framer-motion";
import { div_config } from "../../configs/FramerMotion";
import { Posts } from "../../components/post/Posts";
import { Categories } from "../../components/post/Categories";

interface Props extends BlogPageProps {
    title: string;
}

export const PostScreen = ({ title, posts, categories }: Props) => {
    return (
        <motion.div
            id="posts"
            className="min-h-screen py-8 m-auto md:max-w-5xl lg:max-w-7xl"
            {...div_config}
        >
            <div className="flex flex-col md:flex-row align-[stretch] justify-start flex-initial w-full px-4 md:px-8">
                <Categories categories={categories} />
                <Posts title={title} posts={posts} />
            </div>
        </motion.div>
    );
};
