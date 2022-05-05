import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {

    if(!props.profile) {
        return <Preloader />
    }
    return <div>
        <div className={s.container__header_img}>
            <img className={s.header_img} alt='content__img' src='https://static.insales-cdn.com/files/1/1718/14722742/original/mirissa_3f55c1430faff61080ededda43638142.jpg'></img>
        </div>

        <div className={s.avaDescripsionBlock}>
            <img alt='userAvatar' src={props.profile.photos.small} />
            <div>
                <h2>{props.profile.fullName}</h2>
{/*                 <p>О себе: {props.profile.aboutMe}</p>
 */}                <ProfileStatus status = {props.status} updateStatus={props.updateStatus}  /* {props.profile.aboutMe} */ />
                    <p>Работа: { props.profile.lookingForAJob ? 'ищу' : 'не ищу'} ({props.profile.lookingForAJobDescription})</p>
            </div>
        </div>
    </div>
}

export default ProfileInfo;