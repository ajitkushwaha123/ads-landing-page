import React from "react";

const Video = ({ width }) => {
  return (
    <div className={`w-[${width}] flex justify-center items-center`}>
      <div className="border-4 rounded-lg border-primary">
        <iframe
          className="rounded-md"
          width={width}
          height={width * (9 / 16)}
          src="https://www.youtube.com/embed/j8cPFeu8fQQ?si=8-Yev8PSUEr9Fb-X"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
