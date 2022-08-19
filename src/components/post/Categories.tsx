import Link from "next/link";
import { CategoryProps } from "../../interfaces";
import { EmblaCarousel } from "../generic/carousel/Carousel";

export const Categories = ({ categories }: { categories: CategoryProps[] }) => {
    return (
        <div className="w-full md:w-[320px] flex-shrink-0 max-w-full md:max-w-[20vw] h-auto md:h-[100vh] min-h-full">
            <DesktopLinks categories={categories} />
            <MobileLinks categories={categories} />
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

const MobileLinks = ({ categories }: { categories: CategoryProps[] }) => {
    return (
        <div className="block md:hidden w-full mb-2">
            <EmblaCarousel
                slides={categories?.map(({ _key, title, slug }) => (
                    <div key={_key}>
                        <Link href={`/b/category/${slug.current}`}>
                            <a className="text-v-gray mr-3 select-none cursor-pointer transition-all">
                                {title}
                            </a>
                        </Link>
                    </div>
                ))}
                options={{
                    align: "start",
                    containScroll: "keepSnaps",
                    startIndex: 0,
                    draggable: true,
                    loop: false,
                    slidesToScroll: 1,
                    skipSnaps: true,
                }}
            />
        </div>
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
