import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = props => {
  let postsElements = props.posts.map(p => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;

    props.addPost(text);
    newPostElement.current.value = '';
  };

  return (
    <div className={s.block}>
      <h3>My posts</h3>
      <div className={s.block_text}>
        <div>
          <textarea ref={newPostElement} cols="30" rows="10" />
        </div>
        <button className={s.btn} onClick={addPost}>
          Add post
        </button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
