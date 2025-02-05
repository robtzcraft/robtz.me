import './header.css';
import Button from '@/components/Button.jsx';
import React, { useState, useEffect } from 'react';
import ThemeSwitcher from '../../components/ThemeSwitcher';
import './header.css';

function Header() {
  return (
		<>
      <div className='__header'>
        <div className='__header__logo'>
          <img className='__display__logo__img' src='robtzcraft.svg' alt='logo' />
          <p>robtz</p> 
        </div>
        <div>
          <ThemeSwitcher />
        </div>
      </div>
		</>
	);
}

export default Header;
