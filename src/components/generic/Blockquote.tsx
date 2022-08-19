import { GenericTagProps } from "../../interfaces/GenericProps";

export const Blockquote = ({ text, className }: GenericTagProps) => {
    return <blockquote className={className}>{text}</blockquote>;
};
