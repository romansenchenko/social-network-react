import React from "react";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
    let postElements =
        props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddPostFormRedux onSubmit={onAddPost} />
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

const maxLength5 =maxLengthCreator(5);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'newPostText'} 
                placeholder='Что нового?'
                validate={[required, maxLength5]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: 'profileAddNewPostForm' })(AddNewPostForm);

export default MyPosts;