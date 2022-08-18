/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import clsx from "clsx";
import { motion } from "framer-motion";
import { HeaderLinkProps } from "../../interfaces/HeaderLinkProps";
import { div_config } from "../../configs/FramerMotion";

export const HeaderLink = ({
    anker,
    route,
    label,
    routeToShow,
    mobileClick,
    highlight = false,
    highlightColor = "",
    isOnMobile = false,
}: HeaderLinkProps) => {
    const { pathname, push } = useRouter();
    const hash = typeof window !== "undefined" ? window.location.hash : "";

    const styles = clsx({
        ["text-v-blue mx-2 dark:bg-white dark:text-black"]:
            !isOnMobile && pathname === route,
        ["text-v-gray dark:text-white"]: !isOnMobile && pathname !== route,
    });

    const hlStyles = clsx({
        ["bg-v-blue text-white"]: highlight,
    });

    if (anker && !routeToShow?.includes(pathname)) return null;

    const handleClick = (value: boolean) => {
        if (isOnMobile && !!mobileClick) mobileClick(false);
        if (!anker && route) push(route);
    };

    return (
        <motion.li className="font-montserrat font-bold" {...div_config}>
            <a
                href={anker ? `#${anker}` : "javascript:void(0)"}
                className={`${
                    highlight ? hlStyles : styles
                } font-normal px-4 py-2 rounded`}
                onClick={() => handleClick(false)}
            >
                {label}
            </a>
        </motion.li>
    );
};
