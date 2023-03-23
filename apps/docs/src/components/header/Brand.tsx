import Link from "next/link";
import Image from "next/image";
import { useDateInfo } from "../../hooks/useDateInfo";

interface Props {
  className: string;
}

export const Brand = ({ className }: Props) => {
  const { isXmas } = useDateInfo();

  return (
    <Link
      href="/"
      passHref
      className={`font-bold text-[2rem] bg-v-black text-white px-2 rounded dark:bg-white dark:text-v-black relative cursor-default ${className}`}
    >
      KTD
      {isXmas() ? (
        <div className="absolute top-[-1.5rem] left-[-1.5rem]">
          <Image src="/santa-hat.png" alt="X-Mas" width={56} height={56} />
        </div>
      ) : null}
    </Link>
  );
};
