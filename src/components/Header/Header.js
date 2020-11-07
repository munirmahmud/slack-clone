import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import './Header.elements.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header__left">
                {/* <Avatar className="header__avatar" alt={user?.displayName} src={user?.photoURL} /> */}
                <Avatar className="header__avatar" alt="Munir" src="" />
                <AccessTimeIcon />
            </div>

            <div className="header__search">
                <SearchIcon />
                <input type="text" placeholder="Search" />
            </div>

            <div className="header__right">
                <HelpOutlineIcon />
            </div>
        </header>
    )
}

export default Header
