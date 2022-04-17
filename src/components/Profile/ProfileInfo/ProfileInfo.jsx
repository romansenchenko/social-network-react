import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return <div>
        <div className={s.container__header_img}>
            <img className={s.header_img} alt='content__img' src='https://static.insales-cdn.com/files/1/1718/14722742/original/mirissa_3f55c1430faff61080ededda43638142.jpg'></img>
        </div>

        <div className={s.avaDescripsionBlock}>
            Ava+name
        </div>

    </div>
}

export default ProfileInfo;