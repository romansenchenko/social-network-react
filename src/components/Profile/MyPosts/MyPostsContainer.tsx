import React from 'react';
import { connect } from "react-redux";
import { compose } from 'redux';
import { actions } from "../../../redux/profile-reducer";
import { AppStateType } from '../../../redux/redux-store';
import MyPosts, { DispatchPropsType, MapPropsType } from "./MyPosts";

const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts
    }
}

export default 
    connect<MapPropsType, DispatchPropsType, {}, AppStateType>( mapStateToProps, {
        addPost: actions.addPostActionCreator} )
(MyPosts)