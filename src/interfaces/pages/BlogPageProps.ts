import { CategoryProps } from "../CategoryProps";
import { PostProps } from "../PostProps";

export interface BlogPageProps {
    categories: CategoryProps[];
    posts: PostProps[];
}

export interface SinglePostPageProps {
    post: PostProps;
}
