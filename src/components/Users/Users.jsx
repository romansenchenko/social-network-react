import * as axios from "axios";
import React from "react";
import styles from './Users.module.css';
import userPhoto from '../../../src/assets/images/user.png';

/* export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:     {
        "API-KEY": "39be2bd1-17d2-4382-b7c2-756bd06e234f"
    }
}); */

let Users = (props) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items);
            });



        /* props.setUsers([
            {
                id: 1, photos: 'https://images.pexels.com/users/avatars/19906/thomas-vanhaecht-679.jpeg',
                followed: false, fullName: 'Андрей', status: 'yes', location: { city: 'Minsks', country: 'Belarus' }
            },
            {
                id: 2, photos: 'https://images.pexels.com/users/avatars/19906/thomas-vanhaecht-679.jpeg',
                followed: true, fullName: 'Саша', status: 'да', location: { city: 'Москва', country: 'Russia' }
            }
        ]); */
    } debugger;
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }} >Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }} >Follow</button>}
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
    </div>;
}

export default Users;