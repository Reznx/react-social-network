import React from "react";

const Textarea = props => {

  let createNewMessage = React.createRef();

  let addMessage = () => {
    props.dispatch({ type: "ADD-MESSAGE" });
  };

  let onMessageChange = () => {
    let text = createNewMessage.current.value;
    props.dispatch({ type: "UPDATE-NEW-MESSAGE-TEXT", newText: text });
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
