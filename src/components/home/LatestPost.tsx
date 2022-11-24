import { HomePageProps, PostProps, PostType } from "../../interfaces";
import { Title } from "../generic";
import { EmblaCarousel } from "../generic/carousel/Carousel";
import { Post } from "../generic/post/Post";

export const LatestPost = ({ posts }: Pick<HomePageProps, "posts">) => {
    return (
        <div className="w-full p-12 m-auto flex justify-center items-center flex-col">
            <Title title="Latest Posts" inverted={false} className="mb-12" />

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-2 md:gap-4 xl:gap-2 w-full mb-2">
                {posts?.map(({ _id, ...props }) => (
                    <Post
                        key={_id}
                        {...{ _id, ...props }}
                        type={PostType.Home}
                    />
                ))}
            </div>
        </div>
    );
};
