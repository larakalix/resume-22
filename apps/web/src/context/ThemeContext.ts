import { createContext } from "react";
import { HeaderLinkProps } from "../interfaces";

interface ThemeContextProps {
  theme: string;
  links: HeaderLinkProps[];
  changeTheme: (value: string) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export default ThemeContext;
