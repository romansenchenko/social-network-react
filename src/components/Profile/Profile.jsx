import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
        <div className={s.container__header_img}>
            <img className={s.header_img} alt='content__img' src='https://static.insales-cdn.com/files/1/1718/14722742/original/mirissa_3f55c1430faff61080ededda43638142.jpg'></img>
        </div>
        <div>
            Ava+name
        </div>
        <div>
            links
        </div>
        <div>
            content
            <div>
                Info+Photos
            </div>
            <MyPosts />
        </div>
    </div>
}

export default Profile;