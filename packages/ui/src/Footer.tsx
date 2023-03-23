import { FC } from "react";

type FooterProps = {
  href?: string;
};

export const Footer: FC<FooterProps> = ({
  href = "https://www.kalixthedev.com/",
}) => {
  return (
    <div className="text-center pt-4 pb-8">
      <p className="font-semibold text-black dark:text-white">
        With love by{" "}
        <a href={href} className="font-montserrat font-bold">
          Ivan Lara 👨‍💻 {new Date().getFullYear()}
        </a>
      </p>
    </div>
  );
};
