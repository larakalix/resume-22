import clsx from "clsx";
import { PostType } from "../../../../interfaces";

export const usePost = ({ type }: { type: PostType }) => {
  const boxStyles = clsx({
    ["ml-0 md:ml-8 mb-4"]: type === PostType.Common,
    ["w-full"]: type === PostType.Home,
  });

  const headStyles = clsx({
    ["text-[1.4rem] md:text-[2rem] leading-none"]: type === PostType.Common,
    ["text-[1rem]"]: type === PostType.Home,
  });

  return {
    boxStyles,
    headStyles,
  };
};
