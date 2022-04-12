interface Props {
    text: string;
    className?: string | undefined;
    children?: JSX.Element | JSX.Element[];
}

export const Paragraph = ({ text, className, children }: Props) => {
    return (
        <>
            <p
                className={`pb-9 leading[1.5] text-[1.2rem] md:text-[1.5rem] text-center md:text-left ${className} text-black dark:text-white`}
            >
                {text}
            </p>
            {children}
        </>
    );
};
