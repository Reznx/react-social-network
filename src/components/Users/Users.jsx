import React from "react";
import styles from "./users.module.css";
import * as axios from "axios";
import userImg from "../../assets/img/user_no_img.png";

let Users = props => {
  let getUsers = () => {
    if (props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
          props.setUsers(response.data.items);
        });
    }
  };

  return (
    <div>
      <button onClick={getUsers}>Show more users...</button>
      {props.users.map(u => (
        <div key={u.id} className={styles.users}>
          <div className={styles.users_block}>
            <div>
              <img
                src={u.photos.small !== null ? u.photos.small : userImg}
                className={styles.usersPhoto}
              />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
          <div className={styles.users_info}>
            <div>
              <div className={styles.users_name}>{u.name}</div>
              <div>{u.status}</div>
            </div>
            <div>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
