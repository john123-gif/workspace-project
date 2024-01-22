import React, { useState, useEffect } from 'react';
import navArrow from '../../assets/arrow-image.png';
import './Navbar.css'

export const Navbar = () => {

    const [isSticky, setSticky] = useState(false);
    
    useEffect(() => {
      const handleScroll = () => {
        setSticky(window.scrollY > 0);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return(
        <nav className={`navigation-bar ${isSticky ? 'sticky' : ''}`}>
            <img src={navArrow} alt="" className="nav-arrow"/>
           <span className="list-btn-span">
            <ul className="nav-list">
                    <a href="">
                        <li>Home</li>
                    </a>
                    <a href="">
                        <li>Properties</li>
                    </a>
                    <a href="">
                        <li>How it works</li>
                    </a>
                </ul>
                <button className="register-btn">
                    Login/Register
                </button>
           </span>
        </nav>
    )
}