import { useState } from "react";

const useTheme = () => {
    const [theme, setTheme] = useState("light");

    const changeTheme = (value: string) => {
        setTheme(value);
    };

    return {
        theme,
        changeTheme,
    };
};

export default useTheme;
