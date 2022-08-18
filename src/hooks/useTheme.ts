import { useEffect, useState } from "react";

const useTheme = () => {
    const [theme, setTheme] = useState("dark");

    const changeTheme = (value: string) => {
        setTheme(value);
        saveToLocalStorage(value);
    };

    const saveToLocalStorage = (value: string) =>
        localStorage.setItem("theme", value);

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme) setTheme(theme);
    }, []);

    return {
        theme,
        changeTheme,
    };
};

export default useTheme;
