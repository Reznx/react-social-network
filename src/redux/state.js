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
      newPostText: "Reznik"
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
      newMessageText: "Enter your message"
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

  addMessage() {
    let newMessage = {
      id: 5,
      message: this._state.dialogsPage.newMessageText
    };

    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = "";
    this._callSubscriber(this._state);
  },
  updateNewMessageText(newText) {
    this._state.dialogsPage.newMessageText = newText;
    this._callSubscriber(this._state);
  },

  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if  (action.type === 'ADD-MESSAGE') {
      let newMessage = {
        id: 5,
        message: this._state.dialogsPage.newMessageText
      };

      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = "";
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
      this._state.dialogsPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    }
  }
};

export default store;
window.store = store;
