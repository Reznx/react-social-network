import React from "react";
import styles from "./users.module.css";
import userImg from "../../assets/img/user_no_img.png";

let Users = props => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div className={styles.users_list}>
        {pages.map(p => {
          return (
            <span
              className={props.currentPage === p && styles.selected_page}
              onClick={e => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>

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
