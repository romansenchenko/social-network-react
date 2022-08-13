import React, { FC } from 'react';
import { getIsFetching } from '../../redux/users-selectors';
import Preloader from '../common/Preloader/Preloader';
import { useSelector } from 'react-redux';
import { Users } from './Users';

type UsersPagePropsType = {
    pageTitle: string
}

export const UsersPage: FC<UsersPagePropsType> = (props) => {

    const isFetching = useSelector(getIsFetching)

    return <>
        <h2>{props.pageTitle}</h2>
        {isFetching ? <Preloader /> : null}
        <Users />
    </>
}