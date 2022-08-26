import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { GenericPostProps } from "../../interfaces";

interface Props {
    posts: GenericPostProps[];
}

export const RelatedPosts = ({ posts }: Props) => {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
            {posts?.map(({ _id, title, slug }) => (
                <Link key={_id} href={`/b/${slug.current}`}>
                    <a className="w-full flex flex-col items-center py-8 px-4 md:px-8 border-v-border border rounded-v-rounded text-dark dark:text-white text-[1rem] relative">
                        {title}
                        <FiArrowRight className="absolute bottom-[10%] right-[15%] text-[1.2rem]" />
                    </a>
                </Link>
            ))}
        </div>
    );
};
