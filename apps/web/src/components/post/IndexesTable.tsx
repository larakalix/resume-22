import { FiList } from "react-icons/fi";
import { PiecesTag } from "../../enums";
import { Body } from "../../interfaces";
import { BlockType } from "./BlockType";

interface Props {
  body: Body[];
}

export const IndexesTable = ({ body }: Props) => {
  return (
    <div className="bg-white w-full p-4 rounded-v-rounded">
      <h3 className="leading-[1.75rem] tracking-wide text-[1.25rem] border-b border-b-slate-100 pb-2 mb-2 flex items-center">
        <FiList className="mr-2 text-black" />
        Main content
      </h3>
      <ul>
        {body?.map(({ _key, _type, ...props }) => (
          <li key={_key} className="py-2">
            <BlockType {...{ _key, _type, ...props }} style={PiecesTag.Link} />
          </li>
        ))}
      </ul>
    </div>
  );
};
