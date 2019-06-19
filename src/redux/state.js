const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

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
      newMessageText: ""
    },
    sidebar: {
      friends: [
        { id: 1, name: "Elena" },
        { id: 2, name: "Draynis" },
        { id: 3, name: "Lamar" },
        { id: 4, name: "Maqueen" }
      ]
    }
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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_MESSAGE) {
             let newMessage = {
               id: 5,
               message: this._state.dialogsPage.newMessageText
             };

             this._state.dialogsPage.messages.push(newMessage);
             this._state.dialogsPage.newMessageText = "";
             this._callSubscriber(this._state);
           } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
             this._state.dialogsPage.newMessageText = action.newText;
             this._callSubscriber(this._state);
           }
  }
};

// MyPost post function
export const addPostActionCreator = () => ({
  type: ADD_POST
});

export const updateNewPostTextActionCreator = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});

// Textarea message function
export const addMessageActionCreator = () => ({
         type: ADD_MESSAGE
       });

export const updateNewMessageTextActionCreator = text => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
});

export default store;
window.store = store;
