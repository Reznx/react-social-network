import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div className={s.profile}>
      <h1 className={s.visually_hidden}>Social Network</h1>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};

export default Profile;
