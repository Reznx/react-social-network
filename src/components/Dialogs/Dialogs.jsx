import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom"
const Dialogs = props => {

  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map(d => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));

  let messagesElements = state.messages.map(m => (
    <Message message={m.message} key={m.id} id={m.id} />
  ));

  let onAddMessage = () => {
    props.sendMessage();
  };

  let onMessageChange = e => {
    let text = e.target.value;
    props.updateNewMessageText(text);
  };

  if (!props.isAuth) {
    return <Redirect to={"/login"} />
  }

    return (
      <div>
        <div className={s.dialogs}>
          <div className={s.dialogs_list}>{dialogsElements}</div>
          <div className={s.messages_list}>{messagesElements}</div>
        </div>
        <div>
          <textarea
            onChange={onMessageChange}
            value={props.newMessageText}
            placeholder="Enter your message here"
          />
        </div>
        <div>
          <button onClick={onAddMessage}>New message</button>
        </div>
      </div>
    );
};

export default Dialogs;
