import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div>
        <img
          src="http://shapka-youtube.ru/wp-content/uploads/2018/10/beztexta-category.jpg"
          alt="Head-img"
          class="content__img"
        />
      </div>
      <div>AVATAR + DESCRIPTION</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
