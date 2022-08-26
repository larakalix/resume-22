import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import styled from "styled-components";
import {
    CategoryProps,
    GenericBgImageProps,
    PostProps,
} from "../../../interfaces";
import { urlFor } from "../../../../sanity/builder";

const Header = styled.div<GenericBgImageProps>`
    background-image: linear-gradient(
            90deg,
            rgb(var(--gradient-from, 85 85 85) / 0.2) 0,
            rgb(var(--gradient-to, 85 85 85) / 0.2) 100%
        ),
        url("${(p: GenericBgImageProps) => p.url}");
    background-size: cover;
    background-position: center bottom;
`;

export const PostHeader = ({
    banner,
    title,
    categories,
    _createdAt,
}: PostProps) => {
    const [hasWindow, setHasWindow] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") setHasWindow(true);
    }, []);

    if (!hasWindow) return null;

    const content = (
        <>
            <div className="max-w-4xl m-auto">
                <div className="bg-bullet text-white inline py-2 px-4 rounded-full font-light whitespace-nowrap text-v-small">
                    {categories
                        ?.map(({ title }: CategoryProps) => title)
                        .join(", ")}
                </div>
                <span className="text-v-small text-white font-light ml-3 capitalize">
                    Published {formatDistanceToNow(new Date(_createdAt))} ago
                </span>
            </div>
            <h1 className="text-white text-[2rem] md:text-v-single-post-title tracking-[-.04em] leading-none font-bold mt-8 max-w-4xl m-auto">
                {title}
            </h1>
        </>
    );
    return (
        <div className="bg-black w-full">
            {banner ? (
                <Header
                    className="pt-10 pb-14 px-8 md:pt-20 md:pb-24 md:px-12"
                    url={urlFor(banner?.asset?._ref).url()}
                >
                    {content}
                </Header>
            ) : (
                <div className="pt-10 pb-14 px-8 md:pt-20 md:pb-24 md:px-12 bg-single-post">
                    {content}
                </div>
            )}
        </div>
    );
};
