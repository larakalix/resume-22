import Link from "next/link";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { CategoryProps } from "../../interfaces";

export const Categories = ({ categories }: { categories: CategoryProps[] }) => {
    return (
        <div className="w-full md:w-[320px] flex-shrink-0 max-w-[20vw] h-auto md:h-[100vh] min-h-full">
            <DesktopLinks categories={categories} />
        </div>
    );
};

const DesktopLinks = ({ categories }: { categories: CategoryProps[] }) => {
    return (
        <ul className="space-y-8 mt-2 hidden md:block">
            <li key="all-posts">
                <Link href={`/b`}>
                    <a className="text-v-gray">All Posts</a>
                </Link>
            </li>
            {categories?.map(({ _key, title, slug }) => (
                <CategoryLink
                    key={slug.current}
                    _key={_key}
                    title={title}
                    slug={slug}
                />
            ))}
        </ul>
    );
};

const CategoryLink = ({ title, slug: { current } }: CategoryProps) => {
    return (
        <li key={current}>
            <Link href={`/b/category/${current}`}>
                <a className="text-v-gray">{title}</a>
            </Link>
        </li>
    );
};
