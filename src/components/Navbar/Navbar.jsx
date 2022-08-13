import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css';
import logo from '../../assets/images/logo-icon.svg';
import classNames from "classnames";

const Navbar = () => {
  return <nav className={s.nav}>
    <div className={s.panel_block}>
      <img alt='logo' src={logo} className={s.logo}/>
    </div>
    <div className={`${s.item}`}>
      <NavLink to="/profile" className={({ isActive }) =>(classNames({[s.activeLink]: isActive}))}>Profile</NavLink>
    </div>
    <div className={`${s.item} ${s.active}`}>
      <NavLink to="/dialogs" className={({ isActive }) =>(classNames({[s.activeLink]: isActive}))}>Messages</NavLink>
    </div>
    <div className={`${s.item}`}>
      <NavLink to="/users" className={({ isActive }) =>(classNames({[s.activeLink]: isActive}))}>Users</NavLink>
    </div>
    <div className={`${s.item}`}>
      <NavLink to="/messages" className={({ isActive }) =>(classNames({[s.activeLink]: isActive}))}>Photos</NavLink>
    </div>
    <div className={`${s.item}`}>
      <NavLink to="/chat" className={({ isActive }) =>(classNames({[s.activeLink]: isActive}))}>Chat</NavLink>
    </div>
  </nav>
}

export default Navbar;