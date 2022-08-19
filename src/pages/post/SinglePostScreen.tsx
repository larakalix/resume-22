import { motion } from "framer-motion";
import { PostContent, PostHeader } from "../../components/post";
import { div_config } from "../../configs/FramerMotion";
import { SinglePostPageProps } from "../../interfaces/pages/BlogPageProps";

export const SinglePostScreen = ({ post }: SinglePostPageProps) => {
    return (
        <motion.div
            id={post._id}
            className="min-h-screen flex items-center justify-start flex-col m-auto md:max-w-5xl lg:max-w-7xl"
            {...div_config}
        >
            <PostHeader {...post} />
            <PostContent {...post} />
        </motion.div>
    );
};
