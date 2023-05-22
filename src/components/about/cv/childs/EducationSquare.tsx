import { IconType } from "react-icons";

type Props = {
    title: string;
    place: string;
    icon: IconType;
};

export const EducationSquare = ({ title, place, icon: Icon }: Props) => {
    return (
        <div className="p-2 text-v-black dark:text-white">
            <h4 className="text-[1rem] font-semibold uppercase">{title}</h4>
            <span className="text-[.8rem] flex items-start gap-2 py-2">
                <Icon className="flex-shrink-0 w-4 h-4 text-green-500 dark:text-green-400" />
                {place}
            </span>
        </div>
    );
};
