interface Props {
    text: string;
    className?: string | undefined;
    children?: JSX.Element | JSX.Element[];
}

export const Paragraph = ({ text, className, children }: Props) => {
    return (
        <>
            <p
                className={`${className} font-montserrat text-[#666666] dark:text-[white] tracking-[-.02em] font-normal leading-[1.6] mt-10 text-[1.25rem]`}
            >
                {text}
            </p>
            {children}
        </>
    );
};
