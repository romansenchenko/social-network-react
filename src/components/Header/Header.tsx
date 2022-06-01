import React, { FC } from "react";
import { Link } from "react-router-dom";
import s from './Header.module.css';

type PropsType = {
    isAuth: boolean
    login: string
    logout: () => void
}

const Header: FC<PropsType> = (props) => {
    return <header className={s.header}>
        <div className={s.search__field}>
            <input type={'text'} placeholder="Search..." />
        </div>
        <div className={s.loginBlock}>
            { props.isAuth 
                ? <div> @{props.login} <button onClick={props.logout}>Log out</button> </div>
                : <Link to='/login'>Login</Link> }
        </div>
    </header>
}

export default Header;