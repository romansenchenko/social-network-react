import React from "react";
import styles from './Users.module.css';
import userPhoto from '../../../src/assets/images/user.png';
import { Link } from "react-router-dom";
import { userAPI } from "../../api/api";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 3740; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span key={p.id} className={props.currentPage === p && styles.selectedPage}
                    onClick={() => { props.onPageChanged(p); }}> {p} </span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <Link to={'/profile/' + u.id}>
                            <img alt="ava" src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                        </Link>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress
                                .some(id => id === u.id)}
                                onClick={() => { props.unfollow(u.id); }} >
                                Unfollow</button>
                            : <button disabled={props.followingInProgress
                                .some(id => id === u.id)}
                                onClick={() => { props.follow(u.id); }} >
                                Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div> {u.name} </div>
                        <div> {u.status} </div>
                    </span>
                    <span>
                        <div> {"u.location.country"} </div>
                        <div> {'u.location.city'} </div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;