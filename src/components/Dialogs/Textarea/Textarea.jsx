import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator
} from "../../../redux/state";

const Textarea = props => {
  let createNewMessage = React.createRef();

  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  let onMessageChange = () => {
    let text = createNewMessage.current.value;
    props.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <div>
      <div>
        <textarea
          ref={createNewMessage}
          onChange={onMessageChange}
          value={props.newMessageText}
        />
      </div>
      <button onClick={addMessage}>New message</button>
    </div>
  );
};

export default Textarea;
