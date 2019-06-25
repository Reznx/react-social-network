import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "./../../common/preloader/Preloader";

const ProfileInfo = props => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <img
        src="http://shapka-youtube.ru/wp-content/uploads/2018/10/beztexta-category.jpg"
        alt="GreatPicture"
        className={s.img}
      />
      <div className={s.profile_info}>
        <div className={s.descr_block}>
          <img src={props.profile.photos.large} alt="avatar" />
        </div>
        <div className={s.profile_about}>
          <div className={s.profile_name}>{props.profile.fullName}</div>
          <div>{props.profile.aboutMe}</div>
          <div>{props.profile.lookingForAJobDescription}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
