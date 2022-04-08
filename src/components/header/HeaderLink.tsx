import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";
import { HeaderLinkProps } from "../../interfaces/HeaderLinkProps";

export const HeaderLink = ({
    anker,
    route,
    label,
    routeToShow,
    highlight = false,
}: HeaderLinkProps) => {
    const { pathname } = useRouter();

    const styles = clsx({
        ["bg-black text-white mx-2"]: pathname === route,
        ["bg-transparent text-black"]: pathname !== route,
    });

    const hlStyles = clsx({
        ["bg-[#206ee9] text-white"]: highlight,
    });

    if (anker && !routeToShow?.includes(pathname)) return null;

    return (
        <li className="font-montserrat font-bold">
            <Link href={anker ? `#${anker}` : route}>
                <a
                    className={`${
                        highlight ? hlStyles : styles
                    } px-4 py-2 rounded`}
                >
                    {label}
                </a>
            </Link>
        </li>
    );
};
