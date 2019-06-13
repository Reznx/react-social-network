import React from "react";
import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={s.post}>
      <img src="https://deti-online.com/img/raskraska-kot.jpg" alt="Avatar" />
      Post 1
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};

export default Post;
