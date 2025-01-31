'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import './Navbar.css';
import UserSectionList from '../../user/UserSectionList';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('about-project');
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('isLogin');
        router.push('/login');
    };

    const navItems = [
        { title: 'Projects', id: 'data-intelligence', dropdown: null, url: '/search' },
        { title: 'Agents', id: 'amenities', dropdown: null, url: '/agents' },
        { title: 'Services', id: 'specifications', dropdown: null, url: '/owner-plans' },
        { title: 'Resources', id: 'about-builder', dropdown: ['Modular Kitchen', 'Wardrobe'], url: '/home-interior' }
    ];

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleClick = (item) => {
        const queryParams = new URLSearchParams({ section: item.id }).toString();
        router.push(`/user?${queryParams}`);
        setMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h2 className="gradient-text" onClick={() => router.push('/')}>SgProperty</h2>
                {/* Hamburger Icon */}
                <div className="hamburger-icon" onClick={toggleMenu}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>

                {/* Main Navigation for Desktop */}
                <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
                    {navItems.map((item,index) => (
                        <li
                            key={index}
                            className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                            onMouseEnter={() => setActiveDropdown(item.id)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <Link href={item.url} className={`nav-link ${activeSection === item.id ? 'active' : ''}`}>
                                {item.title}
                                {item.dropdown && <span className="arrow-down">▼</span>}
                            </Link>
                            {item.dropdown && activeDropdown === item.id && (
                                <div className="dropdown-menu">
                                    {item.dropdown.map((subItem) => (
                                        <Link key={subItem} href={`/home-interior#${item.id}-${subItem.toLowerCase().replace(/\s+/g, '-')}`} className="dropdown-item">
                                            {subItem}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </li>
                    ))}
                    {/* User Menu */}
                    <li
                        className="user-icon-container"
                        onMouseEnter={() => setShowUserMenu(true)}
                        onMouseLeave={() => setShowUserMenu(false)}
                    >
                     Account
                        {showUserMenu && (
                            <div className="user-dropdown-menu">
                                <UserSectionList onClick={handleClick} logout={handleLogout} />
                            </div>
                        )}
                    </li>
                </ul>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="mobile-menu">
                        <ul className="mobile-nav-list">
                            {navItems.map((item,index) => (
                                <li key={index} className="mobile-nav-item">
                                    <Link href={item.url} onClick={() => setMenuOpen(false)} className="mobile-nav-link">
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="mobile-user-menu">
                            <UserSectionList onClick={handleClick} logout={handleLogout} />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;