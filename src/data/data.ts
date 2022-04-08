import { HeaderLinkProps } from "../interfaces/HeaderLinkProps";
import { ProjectProps } from "../interfaces/Projects";
import { SkillsProps } from "../interfaces/SkillsProps";

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
        label: "Contact me",
        route: "",
        anker: "hire",
        routeToShow: ["/", "/about", "/home", "/projects"],
        highlight: true,
        isOnMobile: false,
        mobileClick: null,
    },
];

export const social_networks: HeaderLinkProps[] = [
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

export const skills: SkillsProps[] = [
    {
        title: "Frontend",
        description:
            "Design user interfaces with frameworks/libraries like Angular or ReactJS based on user needs for improve workflows efficiency.",
    },
    {
        title: "Backend",
        description:
            "Build business logic solutions, with solid structured applications/services and the best way to set a solid architechture.",
    },
    {
        title: "Mobile",
        description:
            "User experience based on hybrid mobile technologies like React Native or Flutter, in order to develop minimal but funcional applications.",
    },
    {
        title: "DevOps",
        description:
            "Apps update, building, and scaling with automated infrastructures like DigitalOcean, Azure DevOps, Vercel or Netlify for reduce depoyment times.",
    },
];

export const projects: ProjectProps[] = [
    { id: "74283748374", name: "Blog with DatoCMS" },
    { id: "745757567vf", name: "Guess the Pokemon - Card Game" },
    { id: "grg5gg5e455", name: "Ecommerce Store" },
    { id: "4y6gdfgdfth", name: "Facebook Clone" },
];
