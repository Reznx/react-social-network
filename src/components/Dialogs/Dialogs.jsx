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
  let dialogsData = [
    { id: 1, name: "George" },
    { id: 2, name: "Lamar" },
    { id: 3, name: "Draynis" },
    { id: 4, name: "Sergey" },
    { id: 5, name: "Petr" },
    { id: 6, name: "Alex" }
  ];
  let messagesData = [
    { id: 1, message: "Hi!" },
    { id: 2, message: "Go Pubg, dude?" },
    { id: 3, message: "Lets`go dude!" },
    { id: 4, message: "Lets`go dude!" },
    { id: 5, message: "Lets`go dude!" },
    { id: 6, message: "Lets`go dude!" }
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_list}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
      </div>
      <div className={s.messages_list}>
        <Message message={messagesData[0].message} id={messagesData[0].id} />
        <Message message={messagesData[1].message} id={messagesData[1].id} />
        <Message message={messagesData[2].message} id={messagesData[2].id} />
        <Message message={messagesData[3].message} id={messagesData[3].id} />
      </div>
    </div>
  );
};

export default Dialogs;
