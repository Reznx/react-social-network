import React from "react";

const Textarea = props => {
  let createNewMessage = React.createRef();

  let newMessage = () => {
    let text = createNewMessage.current.value;
  };
  return (
    <div>
      <div>
        <textarea cols="30" rows="10" />
      </div>
      <button onClick={newMessage}>New message</button>
    </div>
  );
};

export default Textarea;
