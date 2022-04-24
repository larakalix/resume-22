import { createContext } from "react";

interface ThemeContextProps {
    theme: string;
    changeTheme: (value: string) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export default ThemeContext;
