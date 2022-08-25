import clsx from "clsx";
import { formatDistanceToNow } from "date-fns";
import { UserBadge } from "..";
import { AuthorProps } from "../../../interfaces";

interface Props {
    author: AuthorProps;
    tags: string[];
    showIndexes: boolean;
    _createdAt: Date;
}

export const PostSidebar = ({
    author,
    tags,
    showIndexes,
    _createdAt,
}: Props) => {
    const styles = clsx({
        ["sticky top-0"]: !showIndexes,
        ["relative"]: showIndexes,
    });

    return (
        <aside
            className={`hidden md:block p-10 pt-20 border-l border-l-v-border h-screen min-h-full sticky top-0`}
        >
            <div className="flex flex-col min-h-[80vh]">
                <div className="flex-1">
                    {tags?.length > 0 && (
                        <div className="flex flex-wrap mt-4">
                            {tags?.map((label) => (
                                <Tag
                                    key={`${label.trim()}_tag`}
                                    label={label}
                                />
                            ))}
                        </div>
                    )}
                    <UserBadge {...author} />
                </div>
                <span className="text-v-small text-v-gray font-light capitalize block mb-4">
                    Published {formatDistanceToNow(new Date(_createdAt))} ago
                </span>
            </div>
        </aside>
    );
};

const Tag = ({ label }: { label: string }) => {
    return (
        <span className="text-white dark:text-black bg-black dark:bg-v-tag py-1 px-2 rounded-full text-[0.8rem] mr-1 mb-1">
            {label}
        </span>
    );
};
