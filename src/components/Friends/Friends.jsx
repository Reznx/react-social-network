import React from "react";
import s from "./Friends.module.css";
import Friend from "./Friend/Friend";


const Friends = props => {
  let friendsElements = props.state.friends.map(f => (
    <Friend name={f.name}/>
  ));

  return (
    <div className={s.info}>
      <h2 className={s.title}> Friends</h2>
      <div className={s.friends_list}>
        <div>{friendsElements}</div>
      </div>
    </div>
  );
};

export default Friends;
