import { formatDistanceToNow } from "date-fns";
import { Chronometer, IndexesTable, UserBadge } from "..";
import { AuthorProps } from "../../../interfaces";
import { Body } from "../../../interfaces";

interface Props {
  author: AuthorProps;
  tags: string[];
  showIndexes: boolean;
  _createdAt: Date;
  showTimer?: boolean;
  indexes: Body[];
}

export const PostSidebar = ({
  author,
  tags,
  showIndexes,
  indexes,
  _createdAt,
  showTimer = false,
}: Props) => {
  return (
    <aside
      className={`block md:block p-10 pt-20 border-l border-l-v-border h-auto md:h-screen md:min-h-full relative md:sticky top-0`}
    >
      <div className="flex flex-col min-h-fit md:min-h-[80vh]">
        <div className="flex-1">
          {showTimer && <Chronometer />}
          {tags?.length > 0 && (
            <div className="flex flex-wrap mt-4">
              {tags?.map((label) => (
                <Tag key={`${label.trim()}_tag`} label={label} />
              ))}
            </div>
          )}
          <UserBadge {...author} />
        </div>
        {showIndexes && <IndexesTable body={indexes} />}
        <span className="text-v-small text-v-gray font-light capitalize block my-4">
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
