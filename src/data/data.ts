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

export const skills: SkillsProps[] = [
    {
        title: "Frontend",
        description:
            "Design user interfaces with frameworks/libraries like Angular or ReactJS based on user needs to improve workflows efficiency.",
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

export const about: string[] = [
    "React/Angular frontend dev, .net/node js backend dev. I've been working just over 5 years ago with those techs, furthermore, I'm a Microsoft Professional certified in HTML5, CSS3, and JS.",
    "Moreover, I have a massive passion for coding, the idea of contributing to user experience is priceless, and I love the way that anyone while coding, could be so creative. I believe this takes part of my own skillset. I started as a web designer, just making some visual coding and stylesheets, but since I knew about backend and frontend alternatives, I'm still growing my knowledge about development.",
    "In conclusion, I have experience working on custom applications, e-commerce, micro websites, and Rest APIs. I'm open to grabbing another kind of knowledge with respect to other programming languages, I'm an active English student and kind of a lover of web/mobile development.",
]

export const projects: ProjectProps[] = [
    { id: "74283748374", name: "Blog with DatoCMS", link: 'https://blog-app-nine-omega.vercel.app/', github: 'https://github.com/larakalix/blog-app' },
    { id: "745757567vf", name: "Guess the Pokemon - Card Game", link: 'https://guess-the-pokemon-card.netlify.app/', github: 'https://github.com/larakalix/guess-cards-game' },
    { id: "4112dfgd23h", name: "Instagram Redesign", link: 'https://ig-clone-app.vercel.app/', github: 'https://github.com/larakalix/ig-clone-app' },
    { id: "hgthy56h45h", name: "Hacker News", link: 'https://reign-news-app.netlify.app/', github: 'https://github.com/larakalix/reign-app' },
    { id: "hgthy56h45h", name: "Styled-components basic factory", link: 'https://vitejs-vite-shjus4--3000.local.webcontainer.io/', github: 'https://github.com/larakalix/styled-components-factory/tree/main/src' },
    { id: "gatsh343423", name: "Old Resume - Gatsby", link: 'https://kalixthedev.netlify.app/', github: 'https://github.com/larakalix/resume' },
    { id: "grg5gg5e455", name: "Ecommerce Store", link: 'https://holivegankitchen.vercel.app/' },
    { id: "4y6gdfgdfth", name: "Facebook Clone", link: 'https://fb-clone-app.vercel.app/', github: 'https://github.com/larakalix/fb-clone-app' },
];
