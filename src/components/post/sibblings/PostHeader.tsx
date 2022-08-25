import { formatDistanceToNow } from "date-fns";
import { CategoryProps, PostProps } from "../../../interfaces";

export const PostHeader = ({ title, categories, _createdAt }: PostProps) => (
    <div className="bg-black w-full">
        <div className="pt-10 pb-14 px-8 md:pt-20 md:pb-24 md:px-12 bg-single-post">
            <div>
                <div className="bg-bullet text-white inline py-2 px-4 rounded-3xl font-light whitespace-nowrap text-v-small">
                    {categories
                        ?.map(({ title }: CategoryProps) => title)
                        .join(", ")}
                </div>
                <span className="text-v-small text-white font-light ml-3 capitalize">
                    Published {formatDistanceToNow(new Date(_createdAt))} ago
                </span>
            </div>
            <h1 className="text-white text-[2rem] md:text-v-single-post-title tracking-[-.04em] leading-none font-bold mt-8">
                {title}
            </h1>
        </div>
    </div>
);
