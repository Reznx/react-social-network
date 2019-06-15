import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Message = props => {
  return <div className={s.message}>{props.message}</div>;
};

const DialogItem = props => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Dialogs = props => {
  let dialogs = [
    { id: 1, name: "George" },
    { id: 2, name: "Lamar" },
    { id: 3, name: "Draynis" },
    { id: 4, name: "Sergey" },
    { id: 5, name: "Petr" },
    { id: 6, name: "Alex" }
  ];

  let messages = [
    { id: 1, message: "Hi!" },
    { id: 2, message: "Go Pubg, dude?" },
    { id: 3, message: "Lets`go dude!" },
    { id: 4, message: "Lets`go dude!" },
    { id: 5, message: "Lets`go dude!" },
    { id: 6, message: "Lets`go dude!" }
  ];

  let dialogsElements = dialogs.map(d => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = messages.map(m => (
    <Message message={m.message} id={m.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_list}>
        {dialogsElements}
      </div>
      <div className={s.messages_list}>
        { messagesElements }
      </div>
    </div>
  );
};

export default Dialogs;
