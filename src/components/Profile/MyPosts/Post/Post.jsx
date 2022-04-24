import React from "react";
import s from './Post.module.css';

const Post = (props) => {
  return <div className={s.item}>
    <img alt="avatarImg" src="https://avatars.mds.yandex.net/get-mpic/4809583/img_id8206204418984193451.jpeg/13hq"></img>
    {props.message}
    <div>
      <span>{props.likesCount} like</span>
    </div>
  </div>
}

export default Post;