import { GenericTagProps } from "../../../interfaces";

export const ContentIndex = ({ _key, text, className }: GenericTagProps) => {
  return (
    <a href={`#${_key}_header`} className={className}>
      {text}
    </a>
  );
};
