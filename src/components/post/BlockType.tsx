import { ContentBlock, ContentCode, ContentImage } from ".";
import { PieceType } from "../../enums";
import { Body } from "../../interfaces";

interface TypeProps {
    [key: string]: JSX.Element;
}

export const BlockType = ({ _type, ...props }: Body) => {
    const types: TypeProps = {
        [PieceType.Block]: <ContentBlock _type={_type} {...props} />,
        [PieceType.Image]: <ContentImage _type={_type} {...props} />,
        [PieceType.Code]: <ContentCode _type={_type} {...props} />,
    };

    return types[_type];
};
