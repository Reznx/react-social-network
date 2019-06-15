import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

let posts = [
  { id: 1, message: "Hi, how are you?", likesCount: 3 },
  {
    id: 2,
    message: "Hi, i`m fine. And i`m beginner programmer",
    likesCount: 12
  }
];

let postsElements = posts.map(p => (
  <Post message={p.message} likesCount={p.likesCount} />
));

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
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
