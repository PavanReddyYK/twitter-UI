import React from "react";
import Post from "./Post";
import posts from "@/public/constants/posts.json";

export const Feed = () => {
  return (
    <div className="feed-wrapper">
      <div className="feed-content">
        <div className="feed-header">
          <div className="feed-header__right">For you</div>
          <div className="feed-header__right">Following</div>
        </div>
        <div className="feed-content__container">
          {posts.map((post, key) => {
            return (
              <Post data={post} key={key}/>
            )
          })}
            {/* <Post/>
            <Post/> */}
            {/* <Post/>
            <Post/>
            <Post/> */}
        </div>
      </div>
    </div>
  );
};
