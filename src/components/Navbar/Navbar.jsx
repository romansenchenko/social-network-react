import React from "react";
import { Link } from "react-router-dom";
import s from './Navbar.module.css';

const Navbar = () => {
  return <nav className={s.nav}>
    <div className={s.nav__logo}>
      <img alt='logo' src='https://cdn.logo.com/hotlink-ok/logo-social.png' />
    </div>
    <div className={`${s.item}`}>
      <Link to="/profile" className={({isActive})=>isActive? `${s.activeLink}`:' '}>Profile</Link>
    </div>
    <div className={`${s.item} ${s.active}`}>
      <Link to="/dialogs" className={({isActive})=>isActive? `${s.activeLink}`:' '}>Messages</Link>
    </div>
    <div className={`${s.item}`}>
      <Link to="/messages" className={({isActive})=>isActive? `${s.activeLink}`:' '}>Photos</Link>
    </div>
  </nav>
}

export default Navbar;