import { PieceType } from "../../enums";
import { PostProps } from "../../interfaces/PostProps";
import { CircleAuthor } from "./CircleAuthor";
import { ContentImage } from "./ContentImage";
import { ContentStyle } from "./ContentStyle";

export const PostContent = ({ body, author }: PostProps) => {
    return (
        <div className="flex items-start justify-center px-6">
            <div className="w-3/4 p-20 pl-0">
                {body?.map(({ _key, _type, ...props }) => {
                    return _type === PieceType.Block ? (
                        <ContentStyle
                            key={_key}
                            _type={_type}
                            _key={_key}
                            {...props}
                        />
                    ) : (
                        <ContentImage
                            key={_key}
                            _key={_key}
                            _type={_type}
                            {...props}
                        />
                    );
                })}
            </div>
            <div className="w-1/4 p-10 pt-20 border-l border-l-v-border h-screen min-h-full sticky top-0">
                <span className="text-v-small text-v-gray font-light">
                    Posted by
                    <CircleAuthor name={author.name} image={author.image} />
                </span>
            </div>
        </div>
    );
};
