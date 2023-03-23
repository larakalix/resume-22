import dynamic from "next/dynamic";
import { PieceType } from "../../enums";
import { Body } from "../../interfaces";

const Block = dynamic<any>(() => import(".").then((m) => m.ContentBlock));
const Code = dynamic<any>(() => import(".").then((m) => m.ContentCode));
const CtImage = dynamic<any>(() => import(".").then((m) => m.ContentImage));
const Shortcode = dynamic<any>(() =>
  import(".").then((m) => m.ContentShortcode)
);
const Video = dynamic<any>(() => import(".").then((m) => m.ContentVideo));

interface TypeProps {
  [key: string]: JSX.Element;
}

export const BlockType = ({ _type, ...props }: Body) => {
  const types: TypeProps = {
    [PieceType.Block]: <Block _type={_type} {...props} />,
    [PieceType.Image]: <CtImage _type={_type} {...props} />,
    [PieceType.Code]: <Code _type={_type} {...props} />,
    [PieceType.Youtube]: <Video _type={_type} {...props} />,
    [PieceType.Shortcode]: <Shortcode />,
  };

  return types[_type];
};
