import Link from "next/link";
import { CategoryProps, PostProps } from "../../interfaces";
import { CircleAuthor } from "./CircleAuthor";

export const Post = ({
    _createdAt,
    publishedAt,
    title,
    slug,
    categories,
    author,
}: PostProps) => {
    return (
        <div className="ml-8 mb-4 p-8 border-v-border border rounded-xl bg-white dark:bg-black">
            <Link href={`/b/${slug.current}`}>
                <a>
                    <h2 className="text-black dark:text-white font-bold max-w-2xl">
                        {title}
                    </h2>
                    <div className="flex items-center justify-between mt-12">
                        <div className="text-v-gray font-light text-v-small">
                            <div className="flex flex-wrap justify-start items-center">
                                <CircleAuthor
                                    name={author.name}
                                    image={author.image}
                                />
                            </div>
                            <span>{new Date(publishedAt).toDateString()}</span>
                        </div>
                        <p className="bg-v-gray text-white dark:bg-v-bullet dark:text-v-gray font-light text-[0.75rem] px-3 py-[10px] rounded-[32px]">
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
