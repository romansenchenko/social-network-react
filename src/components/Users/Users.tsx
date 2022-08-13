import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AnyAction } from "redux";
import { FilterType, requestUsers, follow, unfollow } from "../../redux/users-reducer";
import { getCurrentPage, getFollowingInProgress, getPageSize, getTotalUsersCount, getUsers, getUsersFilter } from "../../redux/users-selectors";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import styles from './Users.module.css';
import { UsersSearchForm } from "./UsersSearchForm";

type PropsType = {
}

type QueryParamsType = { term?: string, page?: string, friend?: string }

export const Users: FC<PropsType> = () => {

    const users = useSelector(getUsers)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)
    const followingInProgress = useSelector(getFollowingInProgress)

    const dispatch = useDispatch()
    const history = useNavigate()

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search)
        let actualPage = Number(urlParams.get('page'))
        let term = urlParams.get('term') as string
        let friend = urlParams.get('friend')

        let actualFilter = filter

        actualFilter = { ...actualFilter, term }

        switch (friend) {
            case "null":
                actualFilter = { ...actualFilter, friend: null }
                break;
            case "true":
                actualFilter = { ...actualFilter, friend: true }
                break;
            case "false":
                actualFilter = { ...actualFilter, friend: false }
                break;
        }
        dispatch(requestUsers(actualPage, pageSize, actualFilter) as unknown as AnyAction);
    }, [])

    useEffect(() => {
        const query: QueryParamsType = {}
        if (!!filter.term) query.term = filter.term
        if (filter.friend !== null) query.friend = String(filter.friend)
        if (currentPage !== 1) query.page = String(currentPage)


        history({
            pathname: '/users',
            search: `?term=${filter.term}&friend=${filter.friend}&page=${currentPage}`            
        })
    }, [filter, currentPage])

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

        <UsersSearchForm onFilterChanged={onFilterChanged} />

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