import React from "react";
import { Link } from "react-router-dom";
import s from './Navbar.module.css';
import logo from '../../assets/images/logo-icon.svg';

const Navbar = () => {
  return <nav className={s.nav}>
    <div className={s.panel_block}>
      <img alt='logo' src={logo} className={s.logo}/>
    </div>
    <div className={`${s.item}`}>
      <Link to="/profile" className={({isActive})=>isActive? `${s.activeLink}`:' '}>Profile</Link>
    </div>
    <div className={`${s.item} ${s.active}`}>
      <Link to="/dialogs" className={({isActive})=>isActive? `${s.activeLink}`:' '}>Messages</Link>
    </div>
    <div className={`${s.item}`}>
      <Link to="/users" className={({isActive})=>isActive? `${s.activeLink}`:' '}>Users</Link>
    </div>
    <div className={`${s.item}`}>
      <Link to="/messages" className={({isActive})=>isActive? `${s.activeLink}`:' '}>Photos</Link>
    </div>
  </nav>
}

export default Navbar;