import { LetsTalkButton } from "../../components/generic/LetsTalkButton";
import { Title } from "../../components/generic/Title";
import { Banner } from "../../components/home/Banner";

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
                className="h-screen flex items-center justify-center flex-col"
            >
                <Title title="Skills" inverted={false} />
            </div>
        </>
    );
};
