import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.post}>
      <img src="https://deti-online.com/img/raskraska-kot.jpg" alt="Avatar" />
      {props.message}
      <div>
        <span>Like</span>{props.likesCount}
      </div>
    </div>
  );
};

export default Post;
