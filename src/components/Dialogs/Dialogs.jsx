import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import Textarea from "./Textarea/Textarea";

const Dialogs = props => {
  let dialogsElements = props.state.dialogs.map(d => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.state.messages.map(m => (
    <Message message={m.message} id={m.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_list}>{dialogsElements}</div>
      <div className={s.messages_list}>{messagesElements}</div>
      <Textarea />
    </div>
  );
};

export default Dialogs;
