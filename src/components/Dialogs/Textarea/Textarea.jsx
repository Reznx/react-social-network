import React from "react";

const Textarea = props => {

  let createNewMessage = React.createRef();

  let addMessage = () => {
    props.addMessage();
  };

  let onMessageChange = () => {
    let text = createNewMessage.current.value;
    props.updateNewMessageText(text);
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
