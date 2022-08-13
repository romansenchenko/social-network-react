import React, { FC } from "react";
import s from './Post.module.css';
import userPhoto from '../../../../assets/images/user.png';

type PropsType = {
  message: string
  likesCount: number
}

const Post: FC<PropsType> = ({ message, likesCount}) => {
  return <div className={s.item}>
    <div className={s.imgPost}>
      <img alt='userAvatar' src={ userPhoto} className={s.userPhoto} />
    </div>
    <div className={s.postWithoutImg}>
      <div className={s.userName}>
        <p><strong>{}</strong> add post:</p>
      </div>
      <div className={s.message}>
        {message}
      </div>
      <div className={s.likesCount}>
        <span className={s.like}> Liked {likesCount}</span>
      </div>
    </div>
  </div>
}

export default Post;