import { Title } from "../../components/generic/Title";

export const ProjectsScreen = () => {
    return (
        <div
            id="projects"
            className="m-h-screen flex items-center justify-center flex-col p-8 m-auto md:max-w-5xl lg:max-w-7xl"
        >
            <Title title="Projects" inverted={false} className="mb-[4rem]" />

            <div className="grid grid-cols-2 gap-4 w-full">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <div
                        key={item}
                        className="w-full h-[20rem] flex justify-center items-center bg-red-100 rounded"
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};
