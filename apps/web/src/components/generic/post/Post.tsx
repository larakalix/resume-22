import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { CategoryProps, PostProps, PostType } from "../../../interfaces";
import { CircleAuthor } from "../../post/CircleAuthor";
import clsx from "clsx";
import { usePost } from "./hooks/usePost";

export const Post = ({
  publishedAt,
  title,
  slug,
  categories,
  author,
  type = PostType.Common,
}: PostProps) => {
  const { boxStyles, headStyles } = usePost({ type });

  return (
    <div
      className={`${boxStyles} p-8 border-v-border border rounded-v-rounded bg-white dark:bg-black hover:opacity-90`}
    >
      <Link href={`/b/${slug.current}`} passHref>
        <h2
          className={`text-black dark:text-white font-bold max-w-2xl ${headStyles}`}
        >
          {title}
        </h2>
        <div className="flex items-start sm-center gap-4 sm:gap-[unset] justify-between flex-col sm:flex-row mt-12">
          <div className="flex text-v-gray font-light text-v-small">
            <div className="flex flex-wrap justify-start items-center">
              <CircleAuthor name={author.name} image={author.image} />
            </div>
            <div className="ml-4">
              <span>{author.name}</span>
              <span className="text-[0.8rem] block capitalize">
                {formatDistanceToNow(new Date(publishedAt))} ago
              </span>
            </div>
          </div>
          {type !== PostType.Home && (
            <p className="bg-v-gray text-white dark:bg-v-bullet dark:text-v-gray font-light text-[0.8rem] px-3 py-[10px] rounded-[32px]">
              {categories.map(({ title }: CategoryProps) => title).join(", ")}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};
