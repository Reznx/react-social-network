import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <img
        src="http://shapka-youtube.ru/wp-content/uploads/2018/10/beztexta-category.jpg"
        alt="GreatPicture"
        class="content__img"
      />
      <div className={s.descr_block}>AVA + DESCRIPTION</div>
    </div>
  );
};

export default ProfileInfo;
