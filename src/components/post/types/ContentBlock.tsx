import dynamic from "next/dynamic";
import { HeadingTag, PiecesTag } from "../../../enums";
import { Body } from "../../../interfaces/PostProps";

const PTag = dynamic<any>(() =>
    import("../../generic").then((m) => m.Paragraph)
);
const HeadTag = dynamic<any>(() =>
    import("../../generic").then((m) => m.Header)
);
const QuoteTag = dynamic<any>(() =>
    import("../../generic").then((m) => m.Blockquote)
);
const ATag = dynamic<any>(() =>
    import("./ContentIndex").then((m) => m.ContentIndex)
);

export const ContentBlock = ({
    _key,
    markDefs,
    children,
    style = PiecesTag.Normal,
}: Body) => {
    const { text } = children[0];

    const elements: { [key: string]: JSX.Element } = {
        [PiecesTag.Normal]: (
            <PTag _key={_key} text={text} markDefs={markDefs} />
        ),
        [PiecesTag.H2]: (
            <HeadTag
                _key={_key}
                text={text}
                type={style as HeadingTag}
                className="text-black dark:text-white text-[2rem] leading-[2.25rem] font-bold mt-6 mb-2"
            />
        ),
        [PiecesTag.H4]: (
            <HeadTag
                _key={_key}
                text={text}
                type={style as HeadingTag}
                className="text-black dark:text-white text-[1.4rem] leading-[2rem] font-semibold mt-5 mb-2"
            />
        ),
        [PiecesTag.Blockqoute]: (
            <QuoteTag
                _key={_key}
                text={text}
                className="text-black dark:text-white"
            />
        ),
        [PiecesTag.Link]: (
            <ATag
                _key={_key}
                text={text}
                className="text-black hover:text-v-blue font-bold text-[1.125rem] transition-colors"
            />
        ),
    };

    return elements[style];
};
