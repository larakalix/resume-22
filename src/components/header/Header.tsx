import { HeaderLink } from "./HeaderLink";
import Link from "next/link";
import { links } from "../../data/data";

export const Header = () => {
    return (
        <div className="flex items-center justify-between flex-row p-8 md:max-w-5xl lg:max-w-7xl m-auto sticky">
            <Link href="/">
                <a className="font-bold">
                    
                </a>
            </Link>
            <div>
                <ul className="flex flex-row">
                    {links.map(({ label, ...props }) => (
                        <HeaderLink key={label} {...{ label, ...props }} />
                    ))}
                </ul>
            </div>
        </div>
    );
};
