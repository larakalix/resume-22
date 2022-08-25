import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { CategoryProps, PostProps } from "../../interfaces";
import { CircleAuthor } from "./CircleAuthor";

export const Post = ({
    publishedAt,
    title,
    slug,
    categories,
    author,
}: PostProps) => {
    return (
        <div className="ml-0 md:ml-8 mb-4 p-8 border-v-border border rounded-v-rounded bg-white dark:bg-black">
            <Link href={`/b/${slug.current}`}>
                <a>
                    <h2 className="text-black dark:text-white font-bold max-w-2xl text-[1.2rem] md:text-[2rem] leading-none">
                        {title}
                    </h2>
                    <div className="flex items-center justify-between mt-12">
                        <div className="flex text-v-gray font-light text-v-small">
                            <div className="flex flex-wrap justify-start items-center">
                                <CircleAuthor
                                    name={author.name}
                                    image={author.image}
                                />
                            </div>
                            <div className="ml-4">
                                <span>{author.name}</span>
                                <span className="text-[0.8rem] block capitalize">
                                    {formatDistanceToNow(new Date(publishedAt))}{" "}
                                    ago
                                    {/* {new Date(publishedAt).toDateString()} */}
                                </span>
                            </div>
                        </div>
                        <p className="bg-v-gray text-white dark:bg-v-bullet dark:text-v-gray font-light text-[0.8rem] px-3 py-[10px] rounded-[32px]">
                            {categories
                                .map(({ title }: CategoryProps) => title)
                                .join(", ")}
                        </p>
                    </div>
                </a>
            </Link>
        </div>
    );
};
