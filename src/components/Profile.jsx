import React from "react";
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.profile}>
            <div className={s.img}>
                <img src="http://shapka-youtube.ru/wp-content/uploads/2018/10/beztexta-category.jpg" alt="Шапка" class="content__img" />
            </div>
            <div>
                {/* AVATAR + DESCRIPTION */}
            </div>
            <div>
                My posts
                <div>
                    New Posts
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        Post 1
                    </div>
                    <div className={s.item}>
                        Post 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;