import React from 'react';
import { connect } from "react-redux";
import { compose } from 'redux';
import { addPostActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

class MyPostsContainer extends React.Component {
    render() {
        return <MyPosts 
            profile={this.props.profile}
            posts={this.props.posts}
            addPost={this.props.addPost}
            />
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost:  (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
}



export default compose(
    connect( mapStateToProps, mapDispatchToProps )
)(MyPostsContainer);