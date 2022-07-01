import { useState } from "react";

const useTheme = () => {
    const [theme, setTheme] = useState("dark");

    const changeTheme = (value: string) => {
        setTheme(value);
    };

    return {
        theme,
        changeTheme,
    };
};

export default useTheme;
