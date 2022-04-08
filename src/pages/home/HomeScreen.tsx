import { LetsTalkButton } from "../../components/generic/LetsTalkButton";
import { Banner } from "../../components/home/Banner";
import { Skills } from "../../components/home/Skills";

export const HomeScreen = () => {
    return (
        <>
            <div
                id="Welcome"
                className="h-screen flex items-center justify-center flex-col"
            >
                <Banner />

                <div className="mt-12">
                    <LetsTalkButton inverted />
                </div>
            </div>
            <div
                id="skills"
                className="min-h-screen flex items-center justify-center flex-col"
            >
                <Skills />
            </div>
        </>
    );
};
