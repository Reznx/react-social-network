import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Info from "./Info/Info";
import Friends from "./Friends/Friends";
import StoreContext from "../../StoreContext";
import Navbar from "./Navbar";

const NavbarContainer = props => {
  return (
    <StoreContext.Consumer>
      {store => {
        let state = store.getState();
        return (
        <Navbar  />
        )
      }}
    </StoreContext.Consumer>
  );
};

export default NavbarContainer;
