import Refractor from "react-refractor";
import js from "refractor/lang/javascript";
import { Body } from "../../../interfaces";

Refractor.registerLanguage(js);

export const ContentCode = ({ code }: Body) => {
    return (
        <div className="overflow-hidden rounded-sm">
            <Refractor
                language="js"
                value={code!}
                markers={[1, 2]}
                className="rounded-sm"
            />
        </div>
    );
};
