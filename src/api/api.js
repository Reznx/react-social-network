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
  }
}

export const unfollow = (id) => {
    return instance
      .delete(`follow/${id}`)
  }

export const follow = (id) => {
    return instance
      .post(`follow/${id}`,{})
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

