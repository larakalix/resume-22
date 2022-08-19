import { useEffect, useState } from "react";
import { HeaderLinkProps } from "../interfaces";

const useTheme = () => {
    const [theme, setTheme] = useState("dark");
    const [links, setLinks] = useState<HeaderLinkProps[]>([]);

    const changeTheme = (value: string) => {
        setTheme(value);
        saveToLocalStorage(value);
    };

    const saveLinks = (headerLinks: HeaderLinkProps[]) => {
        setLinks(headerLinks);
    };

    const saveToLocalStorage = (value: string) =>
        localStorage.setItem("theme", value);

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme) setTheme(theme);
    }, []);

    return {
        theme,
        links,
        changeTheme,
        saveLinks,
    };
};

export default useTheme;
