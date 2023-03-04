import React from 'react';
import './header.css';
import logo from 'https://github.com/callmeteddy17/project/blob/main/src/assets/images/Logo.png';

function Header() {
    return (
        <header>
            <a href="siteofteddy.click">
                <img src={logo} alt={'logo'} />
            </a>
        </header>
    );
}

export default Header;
