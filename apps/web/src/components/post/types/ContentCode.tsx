import Refractor from "react-refractor";
import js from "refractor/lang/javascript";
import { Body } from "../../../interfaces";

Refractor.registerLanguage(js);

export const ContentCode = ({ code }: Body) => {
  return (
    <div className="overflow-hidden rounded-v-rounded w-full max-w-[90vw] m-auto text-[0.7rem] md:text-[1rem]">
      <Refractor
        language="js"
        value={code!}
        markers={[1, 2]}
        className="rounded-v-rounded"
      />
    </div>
  );
};
