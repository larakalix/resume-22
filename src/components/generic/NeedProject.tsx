import { social_networks } from "../../data/data";
import { TitleSize } from "../../interfaces/TitleProps";
import { LetsTalkButton } from "./LetsTalkButton";
import { ResumeButton } from "./ResumeButton";
import { Title } from "./Title";

export const NeedProject = () => {
    return (
        <div
            id="hire"
            className="flex justify-center items-center h-screen bg-black text-white dark:bg-white dark:text-black"
        >
            <div className="py-8 m-auto md:max-w-5xl lg:max-w-7xl">
                <Title
                    title="Got a Project? Let's talk!"
                    size={TitleSize.extrasmall}
                    className="text-center"
                    inverted
                />

                <LetsTalkButton inverted={false} justMail />

                <ul className="flex flex-col md:flex-row justify-center items-center">
                    {social_networks.map(({ label, route }) => (
                        <li key={label} className="px-4 mb-4 md:mb-0">
                            <a
                                href={route}
                                target="_blank"
                                rel="noreferrer"
                                className="font-montserrat"
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
