import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
    return <div className={s.content}>
        <ProfileInfo />
        <MyPosts addPost={props.addPost} 
        posts={props.posts} 
        newPostText = {props.newPostText}
        updateNewPostText={props.updateNewPostText}
        />
    </div>
}

export default Profile;