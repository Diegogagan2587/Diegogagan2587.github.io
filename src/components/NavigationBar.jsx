import React, { useState } from 'react';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log('Menu clicked', isMenuOpen)
  }
  return (
    <nav className="flex border-2">
      <span>DVLoper</span>
      <div>
      <span className='sm:hidden' onClick={handleMenuClick}>
          {isMenuOpen ? 'X' : 'Menu'}
        </span>
      </div>
      <ul className="flex gap-5">
        <li>
          <a href="/">Portfolio</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
export default NavigationBar;
