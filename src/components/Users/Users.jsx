import React from "react";
import styles from "./users.module.css";

let Users = props => {
    if (props.users.length === 0) {
        props.setUsers([
          {
            id: 1,
            photoUrl:
              "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-256.png",
            followed: false,
            fullName: "George",
            status: "Hello everyone",
            location: { city: "Chelyabinsk", country: "Russia" }
          },
          {
            id: 2,
            photoUrl:
              "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-256.png",
            followed: true,
            fullName: "Evgeniy",
            status: "Like a boss",
            location: { city: "Paris", country: "Italy" }
          },
          {
            id: 3,
            photoUrl:
              "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-256.png",
            followed: true,
            fullName: "Harold",
            status: "Eee booooyy!",
            location: { city: "Bangkok", country: "Thailand" }
          }
        ]);
    }
      
  return (
    <div>
      {props.users.map(u => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={styles.usersPhoto} />
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
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
