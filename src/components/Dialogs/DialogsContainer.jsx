import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator
} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = props => {
  return (
    <StoreContext.Consumer>
      {store => {
        let state = store.getState().dialogsPage;

        let addMessage = () => {
          store.dispatch(addMessageActionCreator());
        };

        let onMessageChange = text => {
          store.dispatch(updateNewMessageTextActionCreator(text));
        };
        return (
          <Dialogs
            updateNewMessageText={onMessageChange}
            sendMessage={addMessage}
            dialogsPage={state}
            newMessageText={state.newMessageText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
