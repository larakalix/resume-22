import { social_networks } from "../../data/data";
import { TitleSize } from "../../interfaces/TitleProps";
import { LetsTalkButton } from "./LetsTalkButton";
import { Title } from "./Title";

export const NeedProject = () => {
    return (
        <div
            id="hire"
            className="flex justify-center items-center h-screen bg-v-black text-white dark:bg-white dark:text-v-black"
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
                                className="font-montserrat text-white dark:text-v-blue hover:bg-[rgba(0,118,255,.1)] dark:hover:bg-red px-2 py-1 rounded-v-rounded"
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
