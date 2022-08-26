import ReactMarkdown from "react-markdown";
import { PostProps } from "../../../interfaces/PostProps";
import { BlockType } from "../BlockType";
import { Newsletter } from "../../generic";
import { IndexesTable, PostSidebar, RelatedPosts, UserBadge } from "..";
import { HeadingTag } from "../../../enums";

export const PostContent = ({
    body,
    content,
    author,
    showNewsletter,
    showIndexes,
    tags,
    relatedPosts,
    _createdAt,
}: PostProps) => {
    const indexes = showIndexes
        ? body.filter(
              ({ style, children }) =>
                  Object.values(HeadingTag).includes(style as HeadingTag) &&
                  children.length > 0 &&
                  children[0].text
          )
        : [];

    return (
        // <div className="grid grid-cols-[minmax(0,1fr)_340px] w-full max-w-[100vw] items-start">
        <div className="flex items-start justify-center w-full max-w-[100vw]">
            <article className="w-full md:w-3/4 p-6 md:p-20 md:pl-10">
                {showIndexes && <IndexesTable body={indexes} />}
                <div className="block md:hidden mt-4Ç">
                    <UserBadge {...author} />
                </div>
                {body?.map(({ _key, _type, ...props }) => (
                    <BlockType key={_key} {...{ _key, _type, ...props }} />
                ))}
                {content && (
                    <ReactMarkdown className="text-white">
                        {content}
                    </ReactMarkdown>
                )}
                {relatedPosts?.length > 0 && (
                    <RelatedPosts posts={relatedPosts} />
                )}
                {showNewsletter && <Newsletter />}
            </article>
            <PostSidebar
                author={author}
                tags={tags}
                showIndexes={showIndexes}
                _createdAt={_createdAt}
            />
        </div>
    );
};
