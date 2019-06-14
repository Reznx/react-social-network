import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Message = (props) => {
  return (
    <div className={s.message}>{props.message}</div>
  )
}

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Dialogs = props => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_list}>
        <DialogItem name="George" id="1" />
        <DialogItem name="Lamar" id="2" />
        <DialogItem name="Draynis" id="3" />
        <DialogItem name="Sergey" id="4" />
        <DialogItem name="Alex" id="5" />
        <DialogItem name="Petr" id="6" />
      </div>
      <div className={s.messages_list}>
        <Message message="Hi!" />
        <Message message="Go Pubg, dude?" />
        <Message message="Lets`go dude!" />
        <Message message="Lets`go dude!" />
      </div>
    </div>
  );
};

export default Dialogs;
