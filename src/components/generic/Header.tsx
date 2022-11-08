import { useRef } from "react";
import { HeadingTag } from "../../enums";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { GenericTagWtTypeProps } from "../../interfaces/GenericProps";

export const Header = ({
    _key,
    text,
    className,
    type = HeadingTag.H1,
}: GenericTagWtTypeProps) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const entry = useIntersectionObserver(ref, {});
    const isVisible = !!entry?.isIntersecting;

    const key = `${_key}_header`;

    const heading = {
        [HeadingTag.H1]: (
            <h2 id={key} ref={ref} className={className}>
                {text}
            </h2>
        ),
        [HeadingTag.H2]: (
            <h2 id={key} ref={ref} className={className}>
                {text}
            </h2>
        ),
        [HeadingTag.H3]: (
            <h3 id={key} className={className}>
                {text}
            </h3>
        ),
        [HeadingTag.H4]: (
            <h4 id={key} className={className}>
                {text}
            </h4>
        ),
    };

    return <div className={`relative flex items-center`}>{heading[type]}</div>;
};
