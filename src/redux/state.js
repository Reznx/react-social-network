let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 3 },
      {
        id: 2,
        message: "Hi, i`m fine. And i`m beginner programmer",
        likesCount: 12
      }
    ]
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
    ]
  },
  sideBar: [
      { name: "Elena" },
      { name: "Draynis" },
      { name: "Lamar" },
    ]
};

export default state;
