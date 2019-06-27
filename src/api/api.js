import * as Axios from "axios";

const instance = Axios.create({
  withCredentials: true,
  headers: { "API-KEY": "a52dcecf-d5e1-4b91-b5eb-dbfd8592d393" },
  baseURL: "https://social-network.samuraijs.com/api/1.0/"
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },
  follow(userId) {
    return instance.post(
      `https://social-network.samuraijs.com/api/1.0/follow/${userId}`
    );
  },
  unfollow(userId) {
    return instance.delete(
      `https://social-network.samuraijs.com/api/1.0/follow/${userId}`
    );
  }
}




// Axios.post(
//   `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
//   {},
//   {
//     withCredentials: true
//   }
// ).then(response => {
//   if (response.data.resultCode === 0) {
//     props.follow(u.id);
//   }
// });

