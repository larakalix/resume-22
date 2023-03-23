import { CategoryProps } from "./CategoryProps";
import { Child, GenericDateProps } from "./GenericProps";

export enum PostType {
  Common,
  Home,
}

export interface GenericPostProps extends GenericDateProps {
  _id: string;
  title: string;
  slug: Slug;
}

export interface PostProps extends GenericPostProps {
  _id: string;
  _rev: string;
  _type: string;
  author: AuthorProps;
  body: Body[];
  content: any;
  showNewsletter: boolean;
  showIndexes: boolean;
  tags: string[];
  categories: CategoryProps[];
  publishedAt: Date;
  relatedPosts: GenericPostProps[];
  banner?: Banner;
  type?: PostType;
}

export interface Banner {
  _type: string;
  asset: Asset;
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
  url?: string;
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
