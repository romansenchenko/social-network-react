import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import styles from './Users.module.css';

let Users = ({ currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props }) => {
    return <div>
        <div className={styles.paginator}>
            <Paginator currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalItemsCount={totalUsersCount}
                pageSize={pageSize} />
        </div>
        <div className={styles.container}>
            {
                users.map(u => <div className={styles.item}> <User followingInProgress={props.followingInProgress}
                    unfollow={props.unfollow}
                    follow={props.follow}
                    user={u}
                    key={u.id} />
                </div>
                )
            }
        </div>
    </div>
}

export default Users;