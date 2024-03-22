// "use client";
import React from "react";
import Image from "next/image";
import AanandPNG from "/public/assets/images/Aanand-PNG.png";

const Post = ( props ) => {
  const {data} = props;
  console.log(data)
  return (
    <div className="post-container">
      <div className="post-content-wrapper">
        <div className="post-content-image-wrapper">
          <Image
            src={AanandPNG}
            alt="img"
            width={40}
            height={40}
            className="post-content-image-wrapper__page-profile"
          />
        </div>
        <div className="post-content-main-wrapper">
          <div className="post-title">{data.author.name}</div>
          <div className="post-content">content</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
