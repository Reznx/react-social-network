import React from "react";

const Textarea = props => {
  let createNewMessage = React.createRef();

  let newMessage = () => {
    let text = createNewMessage.current.value;
  }
  return (
    <form action="" ref={createNewMessage}>
      <textarea cols="30" rows="10" />
      <button onClick={newMessage}>New message</button>
    </form>
  );
};

export default Textarea;
