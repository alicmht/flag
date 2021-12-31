import React from 'react';
import { NavLink } from 'react-router-dom';
const Menu = () => {
    return (
        <div>
            <NavLink  to="/" >Home </NavLink>
            <NavLink  to="/a-propos" > About</NavLink>
            <NavLink  to="*" >Notfout</NavLink>
        </div>
    );
};

export default Menu;