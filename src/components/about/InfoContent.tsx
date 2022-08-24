import { Description } from "../../interfaces/PageStaticProps";
import { Paragraph } from "../generic/Paragraph";

interface Props {
    description: Description[];
}

export const InfoContent = ({ description }: Props) => {
    return (
        <div className="max-w-full md:max-w-5xl">
            {description.map(({ _key, children }) => {
                const { text } = children[0];
                return (
                    <Paragraph
                        key={_key}
                        _key={_key}
                        text={text}
                        markDefs={[]}
                    />
                );
            })}
        </div>
    );
};
