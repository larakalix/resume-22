import clsx from "clsx";

interface Props {
  inverted?: boolean;
}

export const ResumeButton = ({ inverted = false }: Props) => {
  const styles = clsx({
    ["border-white dark:text-black dark:border-black text-white"]: inverted,
    ["border-black dark:text-white dark:border-white text-black"]: !inverted,
  });

  return (
    <a
      href="#!"
      target="_blank"
      className={`font-montserrat font-bold border-4 ${styles} rounded flex justify-center items-center px-8 py-6 mt-4 mb-6`}
    >
      Resume
    </a>
  );
};
