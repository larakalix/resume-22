import { AuthorProps, PostProps } from "../../interfaces/PostProps";
import { CircleAuthor } from "./CircleAuthor";
import { BlockType } from "./BlockType";
import { Newsletter } from "../generic";
import { IndexesTable } from ".";
import { HeadingTag } from "../../enums";

export const PostContent = ({
    body,
    author,
    showNewsletter,
    showIndexes,
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
        <div className="flex items-start justify-center w-full max-w-[100vw]">
            <div className="w-full md:w-3/4 p-6 md:p-20 md:pl-10">
                {showIndexes && <IndexesTable body={indexes} />}
                <div className="block md:hidden">
                    <UserBadge {...author} />
                </div>
                {body?.map(({ _key, _type, ...props }) => (
                    <BlockType key={_key} {...{ _key, _type, ...props }} />
                ))}
                {showNewsletter && <Newsletter />}
            </div>
            <div className="hidden md:block w-1/4 p-10 pt-20 border-l border-l-v-border h-screen min-h-full sticky top-0">
                <UserBadge {...author} />
            </div>
        </div>
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
