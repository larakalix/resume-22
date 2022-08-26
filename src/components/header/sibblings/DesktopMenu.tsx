import { HeaderLinkProps } from "../../../interfaces/HeaderLinkProps";
import { HeaderLink } from "./HeaderLink";

export const DesktopMenu = ({ links }: { links: HeaderLinkProps[] }) => {
    return (
        <ul className="hidden md:flex md:flex-row">
            {links.map(({ label, ...props }) => (
                <HeaderLink key={label} {...{ label, ...props }} />
            ))}
        </ul>
    );
};
