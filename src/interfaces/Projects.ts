import { Banner } from "./PostProps";

export interface ProjectProps {
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: Date;
    _createdAt: Date;
    github: string;
    link: string;
    name: string;
    banner: Banner;
}
