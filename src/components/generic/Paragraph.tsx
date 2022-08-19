import { GenericTagProps } from "../../interfaces/GenericProps";

interface Props extends GenericTagProps {
    children?: JSX.Element | JSX.Element[];
}

export const Paragraph = ({ text, className, children }: Props) => {
    return (
        <>
            <p
                className={`font-montserrat text-black dark:text-[white] tracking-[-.02em] font-normal leading-[1.6] mt-10 first:mt-0 text-[1rem] md:text-[1.25rem] ${className}`}
            >
                {text}
            </p>
            {children}
        </>
    );
};
