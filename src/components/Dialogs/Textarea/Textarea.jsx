import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator
} from "../../../redux/dialogs_reducer";

const Textarea = props => {
  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  let onMessageChange = e => {
    let text = e.target.value;
    props.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <div>
      <div>
        <textarea
          onChange={onMessageChange}
          value={props.newMessageText}
          placeholder="Enter your message here"
        />
      </div>
      <button onClick={addMessage}>New message</button>
    </div>
  );
};

export default Textarea;
