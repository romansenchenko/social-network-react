import React, { FC } from 'react';
import { ProfileType } from '../../types/types';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

const Profile: FC<PropsType> = (props) => {
    return <div className={s.content}>
        <ProfileInfo 
            isOwner={props.isOwner} 
            savePhoto={props.savePhoto} 
            profile={props.profile} 
            status={props.status} 
            saveProfile={props.saveProfile}
            updateStatus={props.updateStatus} />
        <div className={s.line}></div>
        { props.profile!=null && <MyPostsContainer /* profile={props.profile}  *//>}
    </div> 
}

export default Profile;