import { HeadingTag, PiecesTag } from "../../../enums";
import { Body } from "../../../interfaces/PostProps";
import { Blockquote, Header, Paragraph } from "../../generic";

export const ContentBlock = ({ children, style = PiecesTag.Normal }: Body) => {
    const { text } = children[0];

    const elements: { [key: string]: JSX.Element } = {
        [PiecesTag.Normal]: <Paragraph text={text} />,
        [PiecesTag.H2]: (
            <Header
                text={text}
                type={style as HeadingTag}
                className="text-white text-[2rem] leading-[2.25rem] font-bold mt-6 mb-2"
            />
        ),
        [PiecesTag.Blockqoute]: (
            <Blockquote text={text} className="text-white" />
        ),
    };

    return elements[style];
};
