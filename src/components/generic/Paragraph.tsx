interface Props {
    text: string;
    className?: string | undefined;
    children?: JSX.Element | JSX.Element[];
}

export const Paragraph = ({ text, className, children }: Props) => {
    return (
        <>
            <p className={`pb-9 leading[1.5] text-[1.5rem] ${className}`}>
                {text}
            </p>
            {children}
        </>
    );
};
