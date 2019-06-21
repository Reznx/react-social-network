import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 3 },
        {
          id: 2,
          message: "Hi, i`m fine. And i`m beginner programmer",
          likesCount: 12
        }
      ],
      newPostText: ""
    },
    dialogsPage: {
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
      newMessageText: "Reznik"
    },
    sidebar: [
        { id: 1, name: "Elena" },
        { id: 2, name: "Draynis" },
        { id: 3, name: "Lamar" },
        { id: 4, name: "Maqueen" }
      ]
  },
  _callSubscriber() {
    console.log("state");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(
      this._state.dialogsPage,
      action
    );
    // this._state.sidebar = sidebarReducer(this._state.sidebarPage, action);
    this._callSubscriber(this._state);
  }
};





export default store;
window.store = store;
