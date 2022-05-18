import React from "react";
import { Link } from "react-router-dom";
import s from './Header.module.css';

const Header = (props) => {
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