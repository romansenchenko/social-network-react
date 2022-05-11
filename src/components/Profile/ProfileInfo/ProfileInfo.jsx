import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {

    if(!profile) {
        return <Preloader />
    }
    return <div>
        <div className={s.container__header_img}>
            <img className={s.header_img} alt='content__img' src='https://static.insales-cdn.com/files/1/1718/14722742/original/mirissa_3f55c1430faff61080ededda43638142.jpg'></img>
        </div>

        <div className={s.avaDescripsionBlock}>
            <img alt='userAvatar' src={profile.photos.small} />
            <div>
                <h2>{profile.fullName}</h2>
{/*                 <p>О себе: {profile.aboutMe}</p>
 */}                <ProfileStatusWithHooks status = {status} updateStatus={updateStatus}  /* {props.profile.aboutMe} */ />
                    <p>Работа: { profile.lookingForAJob ? 'ищу' : 'не ищу'} ({profile.lookingForAJobDescription})</p>
            </div>
        </div>
    </div>
}

export default ProfileInfo;