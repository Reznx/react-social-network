import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageBodyCreator
} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from './../../hoc/withAuthRedirect';

let mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage,
    newMessageText: state.dialogsPage.newMessageText,
  };
};
let mapDispatchToProps = dispatch => {
  return {
    updateNewMessageText: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(addMessageActionCreator());
    }
    
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withAuthRedirect
)(Dialogs);
