import React from 'react';
import logo from '../../assets/images/Logo.png';
import '../header/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';

function Header() {
    return (
        <header className="header">
            <div className="icon" href="">
                <img id="logo" src={logo} alt={'logo'} />
                <span>TEDDY DO</span>
            </div>
            <p className="icon">
                <FontAwesomeIcon icon={faBars} style={{ height: 40 }}></FontAwesomeIcon>
            </p>
        </header>
    );
}

export default Header;
