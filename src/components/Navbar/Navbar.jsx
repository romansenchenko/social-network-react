import React from "react";
import s from './Navbar.module.css';

const Navbar = () => {
    return <nav className={s.nav}>
    <div className={s.nav__logo}>
      <img alt='logo' src='https://cdn.logo.com/hotlink-ok/logo-social.png' />
    </div>
    <div className={`${s.item} ${s.active}`}>
      <a>Profile</a>
    </div>
    <div className={`${s.item}`}>
      <a>Messages</a>
    </div>
    <div className={`${s.item}`}>
      <a>Photos</a>
    </div>
  </nav>
}

export default Navbar;