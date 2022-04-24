import React from "react";
import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../redux/users-reducer";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (usersId) => {
            dispatch(followAC(usersId))
        },
    
        unfollow: (usersId) => {
            dispatch(unfollowAC(usersId))
        },
        setUsers: (usersId) => {
            dispatch(setUsersAC(usersId))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);