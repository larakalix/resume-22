import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";
import { Body } from "../../../interfaces";

export const ContentVideo = ({ _key, url }: Body) => {
    const id = getYouTubeId(url!);

    if (!id) return null;

    return (
        <div
            id={_key}
            className="flex items-center justify-center mt-12 mb-4 overflow-hidden rounded-v-rounded"
        >
            <YouTube videoId={id!} />
        </div>
    );
};
