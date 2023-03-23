/* eslint-disable @next/next/no-img-element */
import { urlFor } from "../../../sanity/builder";

interface AuthorProps {
  name: string;
  image: any;
}

export const CircleAuthor = ({ name, image }: AuthorProps) => {
  const metric = 64;
  return (
    <div className="flex items-center justify-center w-10 h-10 overflow-hidden rounded-full first:ml-0 ml-[-10px] border-2 border-black">
      <img
        src={urlFor(image).width(metric).height(metric).url()}
        alt={name}
        width={metric}
        height={metric}
      />
    </div>
  );
};
