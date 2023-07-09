"use client";

import ReactPlayer from "react-player";
type Props = {
  url: string;
};

function VideoPlayer({ url }: Props) {
  return <ReactPlayer url={url} />;
}

export default VideoPlayer;
