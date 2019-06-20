import React from "react";
import s from "./Post.module.css";
import img from "./user.png";



const Post = (props) => {
  return (
    <div className={s.post}>
      <img src={img} alt="Avatar" />
      {props.message}
      <div>
        <span>Like</span>
        {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
