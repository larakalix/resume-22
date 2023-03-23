/* eslint-disable @next/next/no-img-element */
import { urlFor } from "../../../../sanity/builder";
import { Body } from "../../../interfaces/PostProps";

export const ContentImage = ({ _key, asset }: Body) => {
  return (
    <div className="mb-4 mt-2 overflow-hidden rounded-v-rounded">
      <img
        src={urlFor(asset?._ref).url()}
        alt={_key}
        className="rounded-v-rounded"
        loading="lazy"
      />
    </div>
  );
};
