import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";


const Navbar = () => {

    return <nav className={s.nav}>
        <div className={`${s.items} ${s.active}`}>
            <NavLink to='profile' activeClassName={s.activeLink}>Profile</NavLink>
        </div>
        <div className={s.items}  >
            <NavLink to='dialogs' activeClassName={s.activeLink}>Messages</NavLink>
        </div>
        <div className={s.items}>
            <NavLink to='news' activeClassName={s.activeLink}>News</NavLink>
        </div>
        <div className={s.items}>
            <NavLink to='music' activeClassName={s.activeLink}>Music</NavLink>
        </div>
        <div className={s.items}>
            <NavLink to='settings' activeClassName={s.activeLink}>Settings</NavLink>
        </div>

        <div className={s.sidebar}>
            <NavLink to='friends' activeClassName={s.activeLink}>Friends</NavLink>
            <div><img src="https://i.pinimg.com/originals/71/55/f3/7155f321d150013c5b3a625063211764.png" alt=""/></div>
            <div><img src="https://i.pinimg.com/originals/71/55/f3/7155f321d150013c5b3a625063211764.png" alt=""/></div>
            <div><img src="https://i.pinimg.com/originals/71/55/f3/7155f321d150013c5b3a625063211764.png" alt=""/></div>
        </div>
    </nav>
}



export default Navbar;