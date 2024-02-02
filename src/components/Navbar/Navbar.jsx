import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import MobileNav from './MobileNav';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

            <nav className='nav-wrapper'>
                <div className='nav-content'>
                    <img className='logo' src='./assets/images/logo_miki.png' alt='' />

                    <ul>
                        <li>
                            <a className='menu-item' href="#home">Home</a>
                        </li>
                        <li>
                            <a className='menu-item' href="#skills">Skills</a>
                        </li>
                        <li>
                            <a className='menu-item' href="#work-experience">Work Experience</a>
                        </li>
                        <li>
                            <a className='menu-item' href="#contact-me">Contact Me</a>
                        </li>
                        <button className='contact-btn' onClick={() => { }}>Hire Me</button>
                    </ul>
                    <button className='menu-btn' onClick={toggleMenu}>
                        <FontAwesomeIcon icon={openMenu ? faClose : faBars} style={{ fontSize: "1.8rem" }} />
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
