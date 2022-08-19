import { HeadingTag } from "../enums";

export interface Child {
    _key: string;
    _type: string;
    marks: any[];
    text: string;
}

export interface GenericTagProps {
    text: string;
    className?: string | undefined;
}

export interface GenericTagWtTypeProps extends GenericTagProps {
    type: HeadingTag;
}

export interface GenericDateProps {
    _createdAt: Date;
    _updatedAt: Date;
}
