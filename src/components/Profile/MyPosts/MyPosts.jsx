import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>New Posts</div>
      <div className={s.posts}>
        <Post message="Hi, how are you?" likeCount=" 2" />
        <Post
          message="Hi, i`m fine? And i`m beginner programmer"
          likeCount=" 11"
        />
      </div>
    </div>
  );
};

export default MyPosts;
