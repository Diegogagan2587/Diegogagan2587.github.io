import React, { useState } from 'react';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log('Menu clicked', isMenuOpen)
  }
  return (
    <nav className="flex justify-between px-5
    border-2 bg-gray-100 ">
      <span>DVLoper</span>
      <div>
      <span className='sm:hidden' onClick={handleMenuClick}>
          {isMenuOpen ? 'X' : 'Menu'}
        </span>
      </div>
      <ul className={`
      ${isMenuOpen ? 'block' : 'hidden'} sm:flex
       gap-5 sm:block bg-green-100`}>
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
