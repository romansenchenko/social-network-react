import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
    return <div className={s.content}>
        <ProfileInfo 
            isOwner={props.isOwner} 
            savePhoto={props.savePhoto} 
            profile={props.profile} 
            status={props.status} 
            saveProfile={props.saveProfile}
            updateStatus={props.updateStatus} />
        <div className={s.line}></div>
        { props.profile!=null && <MyPostsContainer profile={props.profile} />}
    </div> 
}

export default Profile;