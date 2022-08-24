/* eslint-disable @next/next/no-img-element */
import { urlFor } from "../../../../sanity/builder";
import { Body } from "../../../interfaces/PostProps";

export const ContentImage = ({ _key, asset }: Body) => {
    return (
        <div className="mb-4 mt-2 overflow-hidden rounded-xl">
            <img
                src={urlFor(asset?._ref).url()}
                alt={_key}
                className="rounded-xl"
                loading="lazy"
            />
        </div>
    );
};
