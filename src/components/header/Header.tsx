/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { links } from "../../data/data";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";
import { ThemeSelector } from "./ThemeSelector";
import { Brand } from "./Brand";
import clsx from "clsx";

export const Header = () => {
    const [show, setShow] = useState(false);
    const [hide, setHide] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleClick = (value: boolean) => {
        setShow(value);
    };

    const controlNavbar = () => {
        console.log('controlNavbar', lastScrollY)
        if (typeof window !== 'undefined')
            if (window.scrollY > 100)
                setHide(true);
            else
                setHide(false);

        if (window.scrollY < lastScrollY)
            setHide(false);

        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            return () => window.removeEventListener('scroll', controlNavbar);
        }
    }, [lastScrollY]);

    const styles = clsx({
        ['bg-[rgb(255, 255, 255, .85)] backdrop-blur-sm']: lastScrollY > 100,
    });

    return (
        <div className={`w-full sticky top-0 ${hide ? 'opacity-0' : 'opacity-100'} transition-all ${styles}`}>
            <div className={`flex items-center justify-between flex-row p-8 md:max-w-5xl lg:max-w-7xl m-auto`}>

                <Brand />

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
        </div>
    );
};
