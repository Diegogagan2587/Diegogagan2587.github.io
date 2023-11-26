import React, { useState } from 'react';
import Hamburguer from '../assets/icons/Icon-Menunav-button.png';
import CloseIcon from '../assets/icons/close-popup-button.png';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav
      className="fixed flex justify-between items-center px-5
    w-full
    border-2 bg-white h-10"
    >
      <span>DVLoper</span>
      <div>
        <span className="sm:hidden" onClick={handleMenuClick}>
          {(isMenuOpen && <img src={CloseIcon} alt="Close Icon" 
          className='relative h-full p-2.5'
          />) || (
            <img src={Hamburguer} alt="Hamburguer Icon" 
            className='h-7'/>
          )}
        </span>
      </div>
      <ul
        className={`
      ${
        isMenuOpen
          ? 'block absolute w-screen sm:w-auto h-screen sm:h-auto left-0 sm:left-auto top-10 sm:top-auto'
          : 'hidden'
      } 
      sm:relative sm:flex p-5 sm:p-0
       gap-5  bg-green-100`}
      >
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
