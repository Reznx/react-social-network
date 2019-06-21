import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = props => {
  let postsElements = props.posts.map(p => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = e => {
    let text = e.target.value;;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.block}>
      <h3>My posts</h3>
      <div className={s.block_text}>
        <div>
          <textarea
            onChange={onPostChange}
            value={props.newPostText}
            placeholder="Enter your post here"
          />
        </div>
        <button className={s.btn} onClick={onAddPost}>
          Add post
        </button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
