import { HomePageProps, PostProps, PostType } from "../../interfaces";
import { Title } from "../generic";
import { EmblaCarousel } from "../generic/carousel/Carousel";
import { Post } from "../generic/post/Post";

export const LatestPost = ({ posts }: Partial<HomePageProps>) => {
    return (
        <div className="w-full p-12 m-auto flex justify-center items-center flex-col">
            <Title title="Latest Posts" inverted={false} className="mb-12" />

            <PostLinks posts={posts!} />
        </div>
    );
};

const PostLinks = ({ posts }: { posts: PostProps[] }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 w-full mb-2">
            {/* <EmblaCarousel
                slides={posts?.map(({ _id, ...props }) => (
                    <Post
                        key={_id}
                        {...{ _id, ...props }}
                        type={PostType.Home}
                    />
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
            /> */}
            {posts?.map(({ _id, ...props }) => (
                <Post key={_id} {...{ _id, ...props }} type={PostType.Common} />
            ))}
        </div>
    );
};
