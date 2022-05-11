import React from "react";
import styles from './User.module.css';
import userPhoto from '../../../src/assets/images/user.png';
import { Link } from "react-router-dom";

let User = ({ user, followingInProgress, follow, unfollow }) => {
    return (
        <div>
            <span>
                <div>
                    <Link to={'/profile/' + user.id}>
                        <img alt="ava" src={user.photos.small != null 
                            ? user.photos.small 
                            : userPhoto} className={styles.userPhoto} />
                    </Link>
                </div>
                <div>
                    {user.followed 
                        ? <button disabled={followingInProgress
                            .some(id => id === user.id)}
                            onClick={() => { unfollow(user.id); }} >
                            Unfollow</button>
                        : <button disabled={followingInProgress
                            .some(id => id === user.id)}
                            onClick={() => { follow(user.id); }} >
                            Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div> {user.name} </div>
                    <div> {user.status} </div>
                </span>
                <span>
                    <div> {"u.location.country"} </div>
                    <div> {'u.location.city'} </div>
                </span>
            </span>
        </div>)
}

export default User;