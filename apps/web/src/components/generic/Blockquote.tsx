import { GenericTagProps } from "../../interfaces";

export const Blockquote = ({ text, className }: GenericTagProps) => {
  return <blockquote className={className}>{text}</blockquote>;
};
