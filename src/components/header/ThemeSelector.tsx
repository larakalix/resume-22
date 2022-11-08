import clsx from "clsx";
import { useContext } from "react";
import { IconType } from "react-icons";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import ThemeContext from "../../context/ThemeContext";

interface Props {
    id: string;
    icon: IconType;
}

const THEME_OPTIONS: Props[] = [
    { id: "light", icon: BsFillSunFill },
    { id: "dark", icon: BsFillMoonStarsFill },
];

export const ThemeSelector = () => {
    return (
        <div className="ml-4 transition-all">
            <ul className="flex items-center justify-center bg-v-black dark:bg-white p-2 rounded-full">
                {THEME_OPTIONS.map(({ id, icon }: Props) => (
                    <ThemeIcon key={id} id={id} icon={icon} />
                ))}
            </ul>
        </div>
    );
};

const ThemeIcon = ({ id, icon: IconComponent }: Props) => {
    const { theme, changeTheme } = useContext(ThemeContext);

    const styles = clsx({
        ["bg-white text-v-black dark:bg-v-black dark:text-white"]: id === theme,
        ["bg-v-black text-white dark:bg-white dark:text-v-black"]: id !== theme,
    });

    return (
        <li
            className={`${styles} p-1 cursor-default rounded-full mx-1`}
            onClick={() => changeTheme(id)}
        >
            <IconComponent />
        </li>
    );
};
