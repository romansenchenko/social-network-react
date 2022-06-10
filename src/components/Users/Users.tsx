import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AnyAction } from "redux";
import { FilterType, requestUsers, follow, unfollow } from "../../redux/users-reducer";
import { getCurrentPage, getFollowingInProgress, getPageSize, getTotalUsersCount, getUsers, getUsersFilter } from "../../redux/users-selectors";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import styles from './Users.module.css';
import { UsersSearchForm } from "./UsersSearchForm";
 
type PropsType = {
}

export const Users: FC<PropsType> = ( ) => {
    
    const users = useSelector(getUsers)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)
    const followingInProgress = useSelector(getFollowingInProgress)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch( requestUsers(currentPage, pageSize, filter)as unknown as AnyAction);
    }, []) 

    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter) as unknown as AnyAction)
    }

    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter) as unknown as AnyAction)
    }

    const _follow = (userId: number) => {
        dispatch(follow(userId) as unknown as AnyAction)
    }

    const _unfollow = (userId: number) => {
        dispatch(unfollow(userId) as unknown as AnyAction)
    }
    
    return <div>

        <UsersSearchForm onFilterChanged={onFilterChanged}/>

        <div className={styles.paginator}>
            <Paginator currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalItemsCount={totalUsersCount}
                pageSize={pageSize} />
        </div>
        <div className={styles.container}>
            {
                users.map(u => <div className={styles.item}> 
                            <User followingInProgress={followingInProgress}
                    unfollow={_unfollow}
                    follow={_follow}
                    user={u}
                    key={u.id} />
                </div>
                )
            }
        </div>
    </div>
}