import React from "react";
import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  
  return (
    <div className={s.profile}>
      <h1 className={s.visually_hidden}>Social Network</h1>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
};
export default Profile;
