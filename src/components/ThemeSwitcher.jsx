import { useState } from 'react';
import { IconSun } from '@tabler/icons-react';
import { IconMoon } from '@tabler/icons-react';

const styles = `
  .theme-switcher {
    width: 60px;
    height: 30px;
    border-radius: 15px;
    padding: 4px;
    border: none;
    cursor: pointer;
    position: relative;
    transition: background-color 0.2s ease-in-out;
    background-color: #FFFFFF;
  }

  .theme-switcher.dark {
    background-color: #2C2C2C;
  }

  .theme-switcher .circle {
    width: 24px;
    height: 24px;
    background-color: #0029FF;
    border-radius: 50%;
    position: absolute;
    top: 3px;
    left: 3px;
    transition: transform 0.2s ease-in-out;
  }
  .theme-switcher.dark .circle {
    transform: translateX(29px);
  }
  .iconSun {
    stroke: #FFFFFF;
    position: relative;
    top: 2px;
    left: -7px;
    z-index: 2;
  }
  .iconMoon {
    stroke: #2C2C2C;
    position: relative;
    top: 1px;
    left: 6px;
    z-index: 3;
  }
  .iconMoon.dark {
    stroke: white;
  }
`

const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <style>{styles}</style>
      <button 
        className={`theme-switcher ${isDark ? 'dark' : ''}`}
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
      
      <IconSun 
        className="iconSun"
        color='white'
        size={16} 
      />
      <IconMoon
        className={`iconMoon ${isDark ? 'dark' : ''}`} 
        size={16}
      />
      <div className="circle" />
     </button>
    </>
  );
}

export default ThemeSwitcher;
