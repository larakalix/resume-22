import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import { links } from "../../data/data";
import { useContext, useState } from "react";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";
import { ThemeSelector } from "./ThemeSelector";
import ThemeContext from "../../context/ThemeContext";
import { useDateInfo } from "../../hooks/useDateInfo";
import Image from "next/image";

export const Header = () => {
    const [show, setShow] = useState(false);
    const { isXmas } = useDateInfo();

    const handleClick = (value: boolean) => {
        setShow(value);
    };

    const { theme } = useContext(ThemeContext);

    return (
        <div className="flex items-center justify-between flex-row p-8 md:max-w-5xl lg:max-w-7xl m-auto sticky">
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
            <div className="flex items-center justify-center">
                <div>
                    <div className="flex md:hidden">
                        <HiMenuAlt3
                            className="text-[2rem] cursor-pointer text-black dark:text-white"
                            onClick={() => handleClick(!show)}
                        />
                    </div>

                    <DesktopMenu links={links} />

                    {show ? (
                        <MobileMenu handleClick={handleClick} links={links} />
                    ) : null}
                </div>
                <ThemeSelector />
            </div>
        </div>
    );
};
