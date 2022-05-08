import { profileAPI, userAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        { id: 1, message: "Моё первое сообщение!", likesCount: 111 }
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };

        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { id: 5, message: action.newPostText, likesCount: 0 }]
            };

        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        default:
            return state;
    }
}

export let addPostActionCreator = (newPostText) => ({ type: ADD_POST,newPostText });
export let setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export let setStatus = (status) => ({ type: SET_STATUS, status });

export let getUserProfile = (userId) => (dispatch) => {
    userAPI.getProfile(userId).then(data => {
        dispatch(setUserProfile(data));
    });
}
export let getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(status => {
            dispatch(setStatus(status.data));
        });
}
export let updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
}
export default profileReducer;