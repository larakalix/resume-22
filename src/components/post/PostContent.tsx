import { AuthorProps, PostProps } from "../../interfaces/PostProps";
import { CircleAuthor } from "./CircleAuthor";
import { BlockType } from "./BlockType";

export const PostContent = ({ body, author }: PostProps) => {
    console.log("body", body);
    return (
        <div className="flex items-start justify-center px-6">
            <div className="w-full md:w-3/4 p-6 md:p-20 md:pl-0">
                <div className="block md:hidden">
                    <UserBadge {...author} />
                </div>
                {body?.map(({ _key, _type, ...props }) => (
                    <BlockType key={_key} {...{ _key, _type, ...props }} />
                ))}
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
