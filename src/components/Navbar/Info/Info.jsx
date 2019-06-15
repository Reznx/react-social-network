import React from "react";
import s from "./Info.module.css";
import img from "./user.png";


const Info = () => {
  return (
    <div className={s.info}>
      <img
        src={img}
        alt="Avatar"
      />
    </div>
  );
};

export default Info;
