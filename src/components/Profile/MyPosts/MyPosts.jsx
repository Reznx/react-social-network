import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.posts_block}>
      <h3>My posts</h3>
      <div className={s.posts_add}>
        <div>
          <textarea name="text" id="text" cols="30" rows="10" />
        </div>
        <button className={s.btn}>Add post</button>
      </div>
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
