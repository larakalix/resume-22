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
        label: "Blog",
        route: "/b",
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
        route: "https://www.linkedin.com/in/ilaradev/",
        anker: "",
        isOnMobile: false,
        mobileClick: null,
    },
];
