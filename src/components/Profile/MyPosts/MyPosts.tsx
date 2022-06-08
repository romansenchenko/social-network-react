import React, { FC } from "react";
import { InjectedFormProps, reduxForm } from "redux-form";
import { Field } from "redux-form";/* 
import { maxLengthCreator } from "../../../utils/validators/validators"; */
import { PostType, ProfileType } from "../../../types/types";
import { LoginFormValuesType, Textarea } from "../../common/FormsControls/FormsControls";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

export type MapPropsType = {
    posts: Array<PostType>
    //profile: ProfileType
}
export type DispatchPropsType = {
    addPost: (newPostText: string) => void
}

const MyPosts: FC<MapPropsType & DispatchPropsType> = ({posts, addPost/* , profile */}) => {
    let postElements =
        posts.map(p => <Post key={p.id} /* profile={profile} */ message={p.message} likesCount={p.likesCount} />);

    let onAddPost = (values: AddPostFormValuesType) => {
        addPost(values.newPostText);
    };
    return (
        <div className={s.postsBlock}>
            {/* <h3>My posts</h3> */}
            <div /* className={s.newPostBlock} */ >
                <AddPostFormRedux onSubmit={onAddPost} />
            </div>
            <div className={s.lineBlock}>
                <div className={s.line}></div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

/* const maxLength5 =maxLengthCreator(5); */

type PropsType = {

}
type AddPostFormValuesType = {
    newPostText: string
}

type AddPostFormValuesTypeKeys = Extract<keyof AddPostFormValuesType, string>

const AddPostForm: FC<InjectedFormProps<AddPostFormValuesType, PropsType> & PropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.newPostField}>
                <Field component={Textarea} name={'newPostText'}
                cols='74' rows='4' 
                placeholder={`What's new?`}
                className={s.field}
                /* validate={[required, maxLength5]} */ />
            </div>
            <div className={s.addPostBtnBlock}>
                <button className={s.addPostBtn}>Add post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm<AddPostFormValuesType, PropsType>({form: 'profileAddNewPostForm' })(AddPostForm);

export default MyPosts;