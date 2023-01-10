import clsx from "clsx";
import { TitleSize } from "../../interfaces/TitleProps";

interface Props {
    inverted: boolean;
    title: string;
    size?: TitleSize;
    subtitle?: string | null;
    className?: string | undefined;
}

export const Title = ({
    title,
    inverted = false,
    size = TitleSize.big,
    subtitle = null,
    className = undefined,
}: Props) => {
    if (!title && !subtitle) return null;

    const styles = clsx({
        ["font-semibold text-[2.8rem] md:text-[3.8rem] px-2 md:px-[10rem]"]:
            size === TitleSize.default,
        ["font-bold text-[2.4rem] md:text-[4.2rem] px-2 md:px-[10rem]"]:
            size === TitleSize.big,
        ["font-semibold text-[1rem] md:text-[2.2rem] px-2 md:px-[10rem]"]:
            size === TitleSize.small,
        ["font-semibold text-[1rem] md:text-[1.2rem] px-2 md:px-[6rem]"]:
            size === TitleSize.extrasmall,
    });

    const invertedStyles = clsx({
        ["text-white dark:text-v-black"]: inverted,
        ["text-v-black dark:text-white"]: !inverted,
    });

    return (
        <>
            <h1
                className={`font-montserrat md:leading-[2.8rem] ${styles} ${invertedStyles} ${
                    className ?? ""
                }`}
            >
                {title}
            </h1>
            {subtitle ?? (
                <span
                    className={`font-montserrat text-xs font-light italic ${invertedStyles}`}
                >
                    {subtitle}
                </span>
            )}
        </>
    );
};
