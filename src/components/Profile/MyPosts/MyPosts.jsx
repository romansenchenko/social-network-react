import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return <div>
        My posts
        <div>
          <textarea name="" id="" cols="30" rows="3"></textarea>
          <button>Add post</button>
          <button>Remove post</button>
        </div>
        <div className={s.posts}>
            <Post message='Моё первое сообщение!' likesCount='15'/>
            <Post message='Мое 2 сообщение.' likesCount='20'/>
        </div>
    </div>
}

export default MyPosts;