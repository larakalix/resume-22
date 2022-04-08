import { HiX } from "react-icons/hi";
import { HeaderLinkProps } from "../../interfaces/HeaderLinkProps";
import { HeaderLink } from "./HeaderLink";

interface Props {
    links: HeaderLinkProps[];
    handleClick: (value: boolean) => void;
}

export const MobileMenu = ({ links, handleClick }: Props) => {
    return (
        <div className="fixed top-0 left-0 bg-white h-screen flex items-center w-full ease-out">
            <div className="absolute top-0 right-0 p-8">
                <HiX
                    className="text-[2rem] cursor-pointer"
                    onClick={() => handleClick(false)}
                />
            </div>

            <ul className="flex flex-col w-full justify-between items-center h-[50%]">
                {links.map(({ label, ...props }) => (
                    <HeaderLink
                        key={label}
                        {...{ label, ...props }}
                        isOnMobile
                        mobileClick={handleClick}
                    />
                ))}
            </ul>
        </div>
    );
};
