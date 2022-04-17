import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        { id: 1, message: "Вау", likesCount: 111 },
        { id: 1, message: "Моё первое сообщение!", likesCount: 111 },
        { id: 2, message: "Мое 2 сообщение.", likesCount: 11 },
        { id: 3, message: "%-)", likesCount: 1 }
    ]

    let postElements = posts.map( p => <Post message={p.message} likesCount={p.likesCount} /> );

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea name="" id="" cols="30" rows="3"></textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Remove post</button>
                </div>
            </div>

            <div className={s.posts}>
                { postElements }
            </div>
        </div>
    )
}

export default MyPosts;