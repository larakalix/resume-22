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
        label: "About",
        route: "/about",
        anker: "",
        isOnMobile: false,
        mobileClick: null,
    },
    {
        label: "Skills",
        route: "",
        anker: "skills",
        routeToShow: ["/", "/home"],
        highlight: false,
        isOnMobile: false,
        mobileClick: null,
    },
    {
        label: "Projects",
        route: "/projects",
        anker: "",
        isOnMobile: false,
        mobileClick: null,
    },
    {
        label: "Blog",
        route: "/b",
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

export const social_networks: HeaderLinkProps[] = [
    {
        label: "Whatsapp",
        route: "https://wa.me/50589613396",
        anker: "",
        isOnMobile: false,
        mobileClick: null,
    },
    {
        label: "Twitter",
        route: "https://twitter.com/KalixTheMan",
        anker: "",
        isOnMobile: false,
        mobileClick: null,
    },
    {
        label: "GitHub",
        route: "https://github.com/larakalix",
        anker: "",
        isOnMobile: false,
        mobileClick: null,
    },
    {
        label: "LinkedIn",
        route: "https://www.linkedin.com/in/ivan-antonio-lara-kalix-88b100106/?lipi=urn%3Ali%3Apage%3Aprofile_common_profile_index%3B6af89260-76cd-4b1a-b490-f5481f5a9c92",
        anker: "",
        isOnMobile: false,
        mobileClick: null,
    },
];
