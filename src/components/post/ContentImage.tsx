/* eslint-disable @next/next/no-img-element */
import { urlFor } from "../../../sanity/builder";
import { Body } from "../../interfaces/PostProps";

export const ContentImage = ({ _key, asset }: Body) => {
    return <img src={urlFor(asset?._ref).url()} alt={_key} />;
};
