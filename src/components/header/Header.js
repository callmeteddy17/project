import React, { useState } from 'react';
import logo from '../../assets/images/Logo.png';
import '../header/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import Project from './Project';

function Header(props) {
    const [showProject, setShowProject] = useState(false);

    const handleClick = () => setShowProject(!showProject);
    return (
        <div>
            <header className="header">
                <div className="icon" href="">
                    <img id="logo" src={logo} alt={'logo'} />
                    <span>TEDDY DO</span>
                </div>
                <div className="icon icon-right">
                    <p onClick={handleClick}>
                        <FontAwesomeIcon icon={faBars} style={{ height: 40 }}></FontAwesomeIcon>
                    </p>
                </div>
            </header>
            {showProject && <Project setShowProject={setShowProject} />}
        </div>
    );
}

export default Header;
