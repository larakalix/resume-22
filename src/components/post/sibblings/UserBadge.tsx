import { AuthorProps } from "../../../interfaces";
import { CircleAuthor } from "../CircleAuthor";

export const UserBadge = ({ name, image }: AuthorProps) => {
    return (
        <span className="text-v-small text-v-gray font-light">
            Posted by
            <div className="mt-5">
                <CircleAuthor name={name} image={image} />
            </div>
        </span>
    );
};
