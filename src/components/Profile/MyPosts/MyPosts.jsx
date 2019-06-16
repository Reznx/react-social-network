import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {
  let postsElements = props.posts.map(p => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  return (
    <div className={s.block}>
      <h3>My posts</h3>
      <div className={s.block_text}>
        <div>
          <textarea name="text" id="text" cols="30" rows="10" />
        </div>
        <button className={s.btn}>Add post</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
