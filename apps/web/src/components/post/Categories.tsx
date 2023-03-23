import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";
import { CategoryProps } from "../../interfaces";
import { EmblaCarousel } from "../generic/carousel/Carousel";

export const Categories = ({ categories }: { categories: CategoryProps[] }) => {
  return (
    <div className="w-full md:w-[320px] flex-shrink-0 max-w-full md:max-w-[20vw] h-auto md:h-[100vh] min-h-full sticky top-0 border-r border-v-border">
      <DesktopLinks categories={categories} />
      <MobileLinks categories={categories} />
    </div>
  );
};

const DesktopLinks = ({ categories }: { categories: CategoryProps[] }) => {
  return (
    <ul className="mt-2 hidden md:block">
      <li key="all-posts">
        <Link
          href={`/b`}
          passHref
          className="text-v-gray block px-2 py-4 hover:opacity-90"
        >
          All Posts
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
            <Link
              href={`/b/category/${slug.current}`}
              passHref
              className="text-v-gray mr-3 select-none cursor-pointer transition-all"
            >
              {title}
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
  const { query } = useRouter();
  const active = query?.slug === current;

  const styles = clsx({
    "text-white bg-transparent": active,
    "text-v-gray bg-transparent": !active,
  });

  return (
    <li key={current}>
      <Link
        href={`/b/category/${current}`}
        passHref
        className={`block px-2 py-4 ${styles} hover:opacity-90`}
      >
        {title}
      </Link>
    </li>
  );
};
