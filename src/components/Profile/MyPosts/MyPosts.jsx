import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElements = 
    props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.dispatch({ type: 'ADD-POST' });
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text };
        props.dispatch(action);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                        ref={newPostElement}
                        value = {props.newPostText}
                        name="" id="" cols="30" rows="3"></textarea>

                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                    <button>Remove post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;