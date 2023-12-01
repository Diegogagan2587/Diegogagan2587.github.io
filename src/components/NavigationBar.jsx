import { useState } from 'react';
import PropTypes from 'prop-types';
import Hamburguer from '../assets/icons/Icon-Menunav-button.png';
import CloseIcon from '../assets/icons/close-popup-button.png';

const NavigationBar = ({scrollToSection}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dropdownOpenClasses =
    'block absolute w-screen sm:w-auto h-screen sm:h-auto left-0 sm:left-auto top-10 sm:top-auto bg-[#201DCE99] backdrop-blur-[5px] bg-opacity-60 text-white font-semibold text-3xl sm:text-base leading-10';
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav
      className="fixed flex justify-between items-center px-5
    w-full
    bg-white h-10 z-30"
    >
      <a className="text-xl font-bold text-[#6070ff] cursor-pointer"
      onClick={()=>{
        scrollToSection('introductionRef')
        handleMenuClick()
      }}
      >DVLoper</a>
      <div>
        <span className="sm:hidden" onClick={handleMenuClick}>
          {(isMenuOpen && (
            <img
              src={CloseIcon}
              alt="Close Icon"
              className="relative h-full p-2.5"
            />
          )) || <img src={Hamburguer} alt="Hamburguer Icon" className="h-7" />}
        </span>
      </div>
      <ul
        className={`
      ${isMenuOpen ? dropdownOpenClasses : 'hidden'} 
      sm:relative sm:flex p-5 sm:p-0 sm:bg-white
       gap-5 sm:font-medium sm:text-[#344563]`}
      >
        <li>
          <a 
          className='cursor-pointer'
          onClick={()=>{
            scrollToSection('portfolioRef')
            handleMenuClick()}} 
          >Portfolio</a>
        </li>
        <li>
          <a 
          className='cursor-pointer'
          onClick={()=>{
            scrollToSection('aboutRef')
            handleMenuClick()
          }}
          >About</a>
        </li>
        <li>
          <a 
          className='cursor-pointer'
          onClick={()=>{
            scrollToSection('contactRef')
            handleMenuClick()
          }}
          >Contact</a>
        </li>
      </ul>
    </nav>
  );
};

NavigationBar.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
};

export default NavigationBar;
