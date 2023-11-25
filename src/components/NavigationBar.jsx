import React, { useState } from 'react';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log('Menu clicked', isMenuOpen)
  }
  return (
    <nav className="flex justify-between px-5
    border-2 bg-gray-100 h-10">
      <span>DVLoper</span>
      <div>
      <span className='sm:hidden' onClick={handleMenuClick}>
          {isMenuOpen ? 'X' : 'Menu'}
        </span>
      </div>
      <ul className={`
      ${isMenuOpen ? 'block absolute w-screen sm:w-auto h-screen sm:h-auto left-0 sm:left-auto top-10 sm:top-auto' : 'hidden'} 
      sm:relative sm:flex p-5 sm:p-0
       gap-5  bg-green-100`}>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
export default NavigationBar;
