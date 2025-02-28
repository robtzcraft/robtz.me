import './header.css';
import React, { useState, useEffect } from 'react';
import ThemeSwitcher from '../../components/ThemeSwitcher';
import './header.css';

function Header() {

  const [isOpen, setIsOpen] = useState('__header__')
  const handleClick = () => {
    alert('Click')
  }

  return (
    <div className='__header'>
      <div className='__container'>
        <a href='#' className='__header__logo'>
          <img className='__display__logo__img' src='robtzcraft.svg' alt='logo' />
          <p>robtz</p> 
        </a>
        <nav className='__header__navbar'>
          <a href='#'>About</a>
          <a href='#'>Background</a>
          <a href='#'>Source</a>
        </nav>
        <div>
          <ThemeSwitcher />
          <button onClick={handleClick} className='__header__navbar__button'>X</button>
        </div>
      </div>
    </div>
	);
}

export default Header;
