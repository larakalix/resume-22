import ReactMarkdown from "react-markdown";
import { AuthorProps, PostProps } from "../../../interfaces/PostProps";
import { CircleAuthor } from "../CircleAuthor";
import { BlockType } from "../BlockType";
import { Newsletter } from "../../generic";
import { IndexesTable, RelatedPosts } from "..";
import { HeadingTag } from "../../../enums";

export const PostContent = ({
    body,
    content,
    author,
    showNewsletter,
    showIndexes,
    tags,
    relatedPosts,
}: PostProps) => {
    // console.log("relatedPosts", relatedPosts);
    const indexes = showIndexes
        ? body.filter(
              ({ style, children }) =>
                  Object.values(HeadingTag).includes(style as HeadingTag) &&
                  children.length > 0 &&
                  children[0].text
          )
        : [];

    return (
        <div className="flex items-start justify-center w-full max-w-[100vw]">
            <div className="w-full md:w-3/4 p-6 md:p-20 md:pl-10">
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
            </div>
            <div className="hidden md:block w-1/4 p-10 pt-20 border-l border-l-v-border h-screen min-h-full sticky top-0">
                <UserBadge {...author} />
                <div className="flex flex-wrap mt-4">
                    {tags?.map((label) => (
                        <Tag key={`${label.trim()}_tag`} label={label} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const Tag = ({ label }: { label: string }) => {
    return (
        <span className="text-black bg-v-tag py-1 px-2 rounded-xl text-[0.8rem] mr-1 mb-1">
            {label}
        </span>
    );
};

const UserBadge = ({ name, image }: AuthorProps) => {
    return (
        <span className="text-v-small text-v-gray font-light">
            Posted by
            <CircleAuthor name={name} image={image} />
        </span>
    );
};
