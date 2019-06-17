import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Info from "./Info/Info";
import Friends from "./Friends/Friends";

const Navbar = props => {
  return (
    <div className={s.sidebar}>
      <Info />
      <nav className={s.nav}>
        <ul className={s.list}>
          <li className={s.item}>
            <NavLink
              to="/profile"
              activeClassName={s.active_link}
              className={s.link}
            >
              Profile
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink
              to="/dialogs"
              activeClassName={s.active_link}
              className={s.link}
            >
              Messages
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink
              to="/news"
              activeClassName={s.active_link}
              className={s.link}
            >
              News
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink
              to="/music"
              activeClassName={s.active_link}
              className={s.link}
            >
              Music
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink
              to="/settings"
              activeClassName={s.active_link}
              className={s.link}
            >
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
      <Friends friends={props.state.friends} />
    </div>
  );
};

export default Navbar;