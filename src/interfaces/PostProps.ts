import { CategoryProps } from "./CategoryProps";
import { Child, GenericDateProps } from "./GenericProps";

export interface PostProps extends GenericDateProps {
    _id: string;
    _rev: string;
    _type: string;
    author: AuthorProps;
    body: Body[];
    showNewsletter: boolean;
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
    markDefs: MarkDef[];
    style: string;
    asset?: Asset;
    code?: string;
}

export interface MarkDef {
    _key: string;
    _type: string;
    mark: string;
}

export interface Asset {
    _ref: string;
    _type: string;
}

export interface Slug {
    _type: string;
    current: string;
}
