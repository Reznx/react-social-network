import React from "react";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li className={s.item}>
          <a href="/Profile" className={s.link}>
            Profile
          </a>
        </li>
        <li className={s.item}>
          <a href="/Dialogs" className={s.link}>
            Messages
          </a>
        </li>
        <li className={s.item}>
          <a href="/News" className={s.link}>
            News
          </a>
        </li>
        <li className={s.item}>
          <a href="/Music" className={s.link}>
            Music
          </a>
        </li>
        <li className={s.item}>
          <a href="/Settings" className={s.link}>
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
