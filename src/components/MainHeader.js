/*import { Link } from 'react-router-dom'*/
import { NavLink } from 'react-router-dom';


import classes from './MainHeader.module.css'


import React from 'react'

export const MainHeader = () => {
  return (
    <header className={classes.header}>
        <ul>
            <li>
                <NavLink activeClassName={classes.active} to='/welcome'>Welcome</NavLink>
            </li>
            <li>
                <NavLink activeClassName={classes.active} to='/products'>Products</NavLink>
            </li>
        </ul>
    </header>
  )
}
