const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  messages: [
    { id: 1, message: "Hi!" },
    { id: 2, message: "Go Pubg, dude?" },
    { id: 3, message: "Lets`go dude!" },
    { id: 4, message: "Lets`go dude!" },
    { id: 5, message: "Lets`go dude!" },
    { id: 6, message: "Lets`go dude!" }
  ],
  dialogs: [
    { id: 1, name: "George" },
    { id: 2, name: "Lamar" },
    { id: 3, name: "Draynis" },
    { id: 4, name: "Sergey" },
    { id: 5, name: "Petr" },
    { id: 6, name: "Alex" }
  ],
  newMessageText: ""
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 5,
        message: state.newMessageText
      };

      state.messages.push(newMessage);
      state.newMessageText = "";
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    default:
      return state;
  }
};

// Textarea message function
export const addMessageActionCreator = () => ({
  type: ADD_MESSAGE
});

export const updateNewMessageTextActionCreator = text => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text
});
export default dialogsReducer;
