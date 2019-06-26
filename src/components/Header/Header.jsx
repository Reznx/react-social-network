import React from "react";
import s from "./Header.module.css";
import Logo from "./Logo/Logo";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <header className={s.header}>
      <div className={s.login_block}>
        <Logo />
        <div>
          {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
        </div>
      </div>
    </header>
  );
};

export default Header;
