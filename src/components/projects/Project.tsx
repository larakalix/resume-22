import { ProjectProps } from "../../interfaces/Projects";

export const Project = ({ id, name }: ProjectProps) => {
    return (
        <div className="w-full h-[20rem] flex justify-center items-center bg-red-100 rounded">
            {name}
        </div>
    );
};
