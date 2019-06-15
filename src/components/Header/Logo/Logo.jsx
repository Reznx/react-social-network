import React from "react";
import s from "./Logo.module.css";
import img from "./logo.png";

const Logo = () => {
  return (
    <div className="img">
      <img src={img} alt="logo" className={s.logo} />
    </div>
  );
};

export default Logo;
