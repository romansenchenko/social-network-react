import { UserType } from './../types/types';
import { userAPI } from "../api/user-api";
import { BaseThunkType, InferActionsType } from './redux-store';
import { Dispatch } from 'redux';
import { APIResponceType } from '../api/api';

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number> //array of users ids
}

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SN/USERS/FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case 'SN/USERS/UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case 'SN/USERS/SET_USERS':
            return { ...state, users: action.users }
        case 'SN/USERS/SET_CURRENT_PAGE':
            return { ...state, currentPage: action.currentPage }
        case 'SN/USERS/SET_TOTAL_USERS_COUNT':
            return { ...state, totalUsersCount: action.count }
        case 'SN/USERS/TOGGLE_IS_FETCHING':
            return { ...state, isFetching: action.isFetching }
        case 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const actions = {
    followSuccess: (userId: number) => ({ type: "SN/USERS/FOLLOW", userId } as const),
    unfollowSuccess: (userId: number) => ({ type: "SN/USERS/UNFOLLOW", userId } as const),
    setUsers: (users: Array<UserType>) => ({ type: "SN/USERS/SET_USERS", users } as const),
    setCurrentPage: (currentPage: number) => ({ type: "SN/USERS/SET_CURRENT_PAGE", currentPage } as const),
    setTotalUsersCount: (totalUsersCount: number) => ({ type: "SN/USERS/SET_TOTAL_USERS_COUNT", count: totalUsersCount } as const),
    toggleIsFetching: (isFetching: boolean) => ({ type: "SN/USERS/TOGGLE_IS_FETCHING", isFetching } as const),
    toggleFollowingProgress: (isFetching: boolean, userId: number) => ({ type: "SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS", isFetching, userId } as const)
}

export const requestUsers = (currentPage: number, pageSize: number)
    : ThunkType => {
    return async (dispatch, getState) => {
        dispatch(actions.setCurrentPage(currentPage));
        dispatch(actions.toggleIsFetching(true));

        let data = await userAPI.getUsers(currentPage, pageSize);
        dispatch(actions.toggleIsFetching(false));
        dispatch(actions.setUsers(data.items));
        dispatch(actions.setTotalUsersCount(data.totalCount));
    }
}

const _followUnfollowFlow = async (dispatch: Dispatch<ActionsTypes>,
    userId: number,
    apiMethod: (userId: number) => Promise<APIResponceType>,
    actionCreactor: (userId: number) => ActionsTypes) => {
    dispatch(actions.toggleFollowingProgress(true, userId));
    let data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(actionCreactor(userId));
    }
    dispatch(actions.toggleFollowingProgress(false, userId));
}

export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        await _followUnfollowFlow(dispatch, userId, userAPI.follow.bind(userAPI), actions.followSuccess);
    }
}
export const unfollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        await _followUnfollowFlow(dispatch, userId, userAPI.unfollow.bind(userAPI), actions.unfollowSuccess);
    }
}

export default usersReducer;

export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsType<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>