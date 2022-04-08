import { HeaderLinkProps } from "../interfaces/HeaderLinkProps";

export const links: HeaderLinkProps[] = [
    { label: "Welcome", route: "/", anker: "" },
    { label: "About", route: "/about", anker: "" },
    {
        label: "Skills",
        route: "",
        anker: "skills",
        routeToShow: ["/", "/home"],
        highlight: false,
    },
    { label: "Projects", route: "/projects", anker: "" },
    {
        label: "Contact me",
        route: "",
        anker: "hire",
        routeToShow: ["/", "/about", "/home", "/projects"],
        highlight: true,
    },
];

export const social_networks: HeaderLinkProps[] = [
    { label: "Twitter", route: "https://twitter.com/KalixTheMan", anker: "" },
    { label: "GitHub", route: "https://github.com/larakalix", anker: "" },
    {
        label: "LinkedIn",
        route: "https://www.linkedin.com/in/ivan-antonio-lara-kalix-88b100106/?lipi=urn%3Ali%3Apage%3Aprofile_common_profile_index%3B6af89260-76cd-4b1a-b490-f5481f5a9c92",
        anker: "",
    },
];
