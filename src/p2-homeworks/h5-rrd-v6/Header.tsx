import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from "./Header.module.css"

function Header() {
    return (
        <div className={s.menu}>
            <div className={s.title}>Menu</div>
            <div className={s.nav}>
                <NavLink to={PATH.PRE_JUNIOR}>pre junior </NavLink>
                <NavLink to={PATH.JUNIOR}>junior </NavLink>
                <NavLink to={PATH.JUNIOR_PLUS}>junior plus </NavLink>
            </div>
        </div>
    )
}

export default Header
