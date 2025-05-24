import React from "react";
import HeroVideoDialog from "../magicui/hero-video-dialog";

const HeroVideo = () => {
  return (
    <div className="mt-20 container mx-auto bg-transparent">
      <HeroVideoDialog
        className="w-[70%] mx-auto"
        animationStyle="from-center"
        videoSrc="/futuristic-vid.mp4"
        thumbnailSrc="/hero-thumbnail.png"
        thumbnailAlt="Dummy Video Thumbnail"
      />
    </div>
  );
};

export default HeroVideo;
