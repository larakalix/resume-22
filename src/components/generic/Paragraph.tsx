import { MarkDefType } from "../../enums";
import { MarkDef } from "../../interfaces";
import { GenericTagProps } from "../../interfaces/GenericProps";

interface Props extends GenericTagProps {
    markDefs: MarkDef[];
    children?: JSX.Element | JSX.Element[];
}

export const Paragraph = ({ text, className, markDefs, children }: Props) => {
    const isLink =
        markDefs.length > 0 &&
        markDefs.filter(({ _type }) => _type === "link").length > 0;

    return (
        <>
            <span className="text-white">{isLink}</span>
            {isLink ? (
                <a
                    href={text}
                    target="_blank"
                    rel="noreferrer"
                    className={`text-v-blue underline ${className}`}
                >
                    {text}
                </a>
            ) : (
                <>
                    <p
                        className={`font-montserrat text-black dark:text-[white] tracking-[-.02em] font-normal leading-[1.6] mt-8 first:mt-0 text-[1rem] md:text-[1.2rem] break-words ${className}`}
                    >
                        {text}
                    </p>
                    {children}
                </>
            )}
        </>
    );
};
