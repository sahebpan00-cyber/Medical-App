import React, { useState, useRef, useEffect } from 'react'
import Topbar from './Topbar'
import NavMenu from './NavMenu'
import { NavLink } from 'react-router-dom'
import logo from '../../../assets/logo.png'

const Navbar = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const closeMenu = () => {
        setMobileMenuOpen(false);
    };

    useEffect(() => {

        const handleClickOutside = (event) => {

            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMobileMenuOpen(false);
            }

        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, []);

    return (
        <div className="navbar-container">

            <Topbar />

            <nav className="navbar">

                {/* Logo */}
                <div className="navbar-logo">
                    <NavLink to='/' onClick={closeMenu} className="logo-link">
                        <img src={logo} alt="JaanJivan Logo" className='brand-logo' />
                        <span className="brand-name">JaanJivan</span>
                    </NavLink>
                </div>

                {/* Menu + Auth */}
                <div
                    ref={menuRef}
                    className={`nav-wrapper ${mobileMenuOpen ? "active" : ""}`}
                >

                    {/* Pass close function */}
                    <NavMenu closeMenu={closeMenu} />

                    <div className="navbar-auth">
                        <NavLink to="/login" className="btn btn-secondary" onClick={closeMenu}>
                            Login
                        </NavLink>

                        <NavLink to="/login" className="btn btn-primary" onClick={closeMenu}>
                            Book Appointment
                        </NavLink>
                    </div>

                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="mobile-menu-toggle"
                    onClick={() => setMobileMenuOpen(prev => !prev)}
                >
                    ☰
                </button>

            </nav>
        </div>
    )
}

export default Navbar