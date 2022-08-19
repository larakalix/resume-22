import { CategoryProps } from "./CategoryProps";
import { Child } from "./GenericProps";

export interface PostProps {
    _createdAt: Date;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: Date;
    author: AuthorProps;
    body: Body[];
    categories: CategoryProps[];
    publishedAt: Date;
    slug: Slug;
    title: string;
}

export interface AuthorProps {
    _ref: string;
    _type: string;
    name: string;
    image: any;
}

export interface Body {
    _key: string;
    _type: string;
    children: Child[];
    markDefs: any[];
    style: string;
    asset?: Asset;
}

export interface Asset {
    _ref: string;
    _type: string;
}

export interface Slug {
    _type: string;
    current: string;
}
