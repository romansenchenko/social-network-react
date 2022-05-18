import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.png';
import { propTypes } from 'redux-form';

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

    if(!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {debugger;
            savePhoto(e.target.files[0]);
        }
    }

    return <div className='profile_info'>
        <div className={s.container__header_img}>
            <img className={s.header_img} alt='content__img' src='https://static.insales-cdn.com/files/1/1718/14722742/original/mirissa_3f55c1430faff61080ededda43638142.jpg'></img>
        </div>

        <div className={s.avatarBlock}>
            <div className={s.imgContainer}>
                <img alt='userAvatar' src={profile.photos.small || userPhoto} className={s.userPhoto} />
                <h3>{profile.fullName}</h3>
            </div>
            {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
        </div>

        <div className={s.descripsionBlock}>
            <div>
{/*                 <p>О себе: {profile.aboutMe}</p>
 */}                <ProfileStatusWithHooks status = {status} updateStatus={updateStatus}  /* {props.profile.aboutMe} */ />
                    <p>Работа: { profile.lookingForAJob ? 'ищу' : 'не ищу'} ({profile.lookingForAJobDescription})</p>
            </div>
        </div>
    </div>
}

export default ProfileInfo;