import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [Menuclick, setMenuclick] = useState(false);
    const toggleMenu = () => setMenuclick(!Menuclick);
    const closemenu = () => setMenuclick(false);

    return (
        <>
            <div className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className="navbar-logo">
                        <img src='/LOGO.jpg' alt="When in Rome" />
                    </Link>
                    <div className='menu-icon' onClick={toggleMenu}>
                        {Menuclick ? (<span class="material-symbols-outlined">close</span>)
                            : (<span class="material-symbols-outlined">menu</span>)}
                    </div>
                    <ul className={Menuclick ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closemenu}>HOME</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/blog' className='nav-links' onClick={closemenu}>BLOG</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar;