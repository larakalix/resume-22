import Link from "next/link";
import Image from "next/image";
import { useDateInfo } from "../../hooks/useDateInfo";

export const Brand = () => {
    const { isXmas } = useDateInfo();

    return (
        <Link href="/">
            <a className="font-bold text-[2rem] bg-black text-white px-2 rounded dark:bg-white dark:text-black relative">
                KTD
                {
                    isXmas() ? <div className="absolute top-[-1.5rem] left-[-1.5rem]">
                        <Image src="/santa-hat.png" alt="X-Mas" width={56} height={56} />
                    </div> : null
                }
            </a>
        </Link>
    )
}
