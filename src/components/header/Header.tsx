import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import { links } from "../../data/data";
import { useState } from "react";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
    const [show, setShow] = useState(false);

    const handleClick = (value: boolean) => {
        setShow(value);
    };

    return (
        <div className="flex items-center justify-between flex-row p-8 md:max-w-5xl lg:max-w-7xl m-auto sticky">
            <Link href="/">
                <a className="font-bold text-[2rem] bg-black text-white px-2 rounded">
                    KTD
                </a>
            </Link>
            <div>
                <div className="flex md:hidden">
                    <HiMenuAlt3
                        className="text-[2rem] cursor-pointer"
                        onClick={() => handleClick(!show)}
                    />
                </div>

                <DesktopMenu links={links} />

                {show ? (
                    <MobileMenu handleClick={handleClick} links={links} />
                ) : null}
            </div>
        </div>
    );
};
