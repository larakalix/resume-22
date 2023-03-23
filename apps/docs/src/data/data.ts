import { HeaderLinkProps } from "../interfaces/HeaderLinkProps";

export const links: HeaderLinkProps[] = [
  {
    label: "Welcome",
    route: "/",
    anker: "",
    isOnMobile: false,
    mobileClick: null,
  },
  {
    label: "Contact me",
    route: "",
    anker: "hire",
    routeToShow: ["/", "/about", "/home", "/projects", "/b"],
    highlight: true,
    isOnMobile: false,
    mobileClick: null,
  },
];
