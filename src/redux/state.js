let rerenderEntireTree = () => {
  console.log('state')
};


let state = {
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
};

// Post textarea settings
export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText='';
  rerenderEntireTree(state);
};

export const updateNewPostText = newText => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

// Message textarea settings
export const addMessage = () => {
  let newMessage = {
    id: 5,
    message: state.dialogsPage.newMessageText
  };

  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText='';
  rerenderEntireTree(state);
};

export const updateNewMessageText = newText => {
  state.dialogsPage.newMessageText = newText;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;
