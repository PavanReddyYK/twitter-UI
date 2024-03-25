// "use client";
import React from "react";
import Image from "next/image";
import AanandPNG from "/public/assets/images/Aanand-PNG.png";
import trainPNG from "/public/assets/images/trainPNG.png";
import verifiedPNG from "/public/assets/icons/verifiedPNG.png";
import { GoHeart } from "react-icons/go";
// import { BiRepost } from "react-icons/bi";
import { AiOutlineRetweet } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BiBarChart } from "react-icons/bi";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { FiShare } from "react-icons/fi";
import Link from "next/link";

const Post = (props) => {
  const { data } = props;

  const getFormattedDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };
  // console.log(data);
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
          <div className="post-title">
            <Link href="/profile">{data.author.name}</Link>
            {data.author.verified && (
              <Image src={verifiedPNG} alt="img" width={17} height={17} />
            )}
            &nbsp;
            <span className="user-id">
              <Link href="/profile">@{data.author.username}</Link>
            </span>
            <span className="post-date">
              &nbsp; &#183; &nbsp;
              {getFormattedDate(data.timestamp)}
            </span>
          </div>
          <div className="post-content">
            <div className="post-content__text">{data.content}</div>
            <div className="post-content__image-container">
              <Image className="images" src={trainPNG} height={290} width={580}/>
            </div>
          </div>
          <div className="post-response">
            <div className="post-response__item comment"><FaRegComment className="icons"/>{data.comments.length}</div>
            <div className="post-response__item retweets"><AiOutlineRetweet className="icons"/>{data.retweets}</div>
            <div className="post-response__item likes"><GoHeart className="icons"/>{data.likes}</div>
            <div className="post-response__item views"><BiBarChart className="icons"/>{data.views}K</div>
            <div className="post-response__bookShare"><MdOutlineBookmarkBorder className="icons"/><FiShare className="icons"/></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
