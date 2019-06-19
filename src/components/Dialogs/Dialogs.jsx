import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import Textarea from "./Textarea/Textarea";

const Dialogs = props => {
  let dialogsElements = props.dialogsPage.dialogs.map(d => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.dialogsPage.messages.map(m => (
    <Message message={m.message} id={m.id} />
  ));

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogs_list}>{dialogsElements}</div>
        <div className={s.messages_list}>{messagesElements}</div>
      </div>
      <Textarea
        newMessageText={props.dialogsPage.newMessageText}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Dialogs;
