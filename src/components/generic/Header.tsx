import { HeadingTag } from "../../enums";
import { GenericTagWtTypeProps } from "../../interfaces/GenericProps";

export const Header = ({
    text,
    className,
    type = HeadingTag.H1,
}: GenericTagWtTypeProps) => {
    const heading = {
        [HeadingTag.H1]: <h2 className={className}>{text}</h2>,
        [HeadingTag.H2]: <h2 className={className}>{text}</h2>,
        [HeadingTag.H3]: <h3 className={className}>{text}</h3>,
        [HeadingTag.H4]: <h4 className={className}>{text}</h4>,
    };

    return heading[type];
};
