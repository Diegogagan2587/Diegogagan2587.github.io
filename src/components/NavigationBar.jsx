import { useState, useEffect } from 'react';
import HamburgerBtn from './nav/HamburgerBtn';

const NavigationBar = (props) => {
  const { scrollToSection } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('');

  // Detect current page on mount
  useEffect(() => {
    setCurrentPage(window.location.pathname);
  }, []);

  const dropdownOpenClasses =
    'absolute h-screen sm:h-auto left-0 sm:left-auto top-10 sm:top-auto bg-[#201DCE99] backdrop-blur-[5px] bg-opacity-60 text-white font-semibold text-3xl sm:text-base leading-10';

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigationClick = (sectionId) => {
    if (currentPage === '/' && typeof scrollToSection === 'function') {
      // If on the homepage, scroll to section
      scrollToSection(sectionId);
    } else {
      // If not on homepage, navigate to section with hash
      window.location.href = `/#${sectionId}`;
    }
    if (isMenuOpen) {
      handleMenuClick();
    }
  };

  return (
    <nav
      className={`fixed flex justify-between lg:justify-around items-center px-5
    w-full max-w-[100vw]
    transition-all duration-500 ease-in-out
    ${isMenuOpen ? 'bg-[#201DCE99] sm:bg-white' : 'bg-white'} h-10 z-30`}
    >
      <a
        className={`text-xl font-bold cursor-pointer
      ${isMenuOpen ? 'text-white sm:text-[var(--accent)]' : 'text-[var(--accent)]'}
      `}
        onClick={() => {
          handleNavigationClick('introductionRef');
        }}
      >
        DVLoper-z
      </a>
      <div>
        <div className="sm:hidden">
          <HamburgerBtn isOpen={isMenuOpen} toggle={handleMenuClick} />
        </div>
      </div>
      <ul
        className={`fixed top-10 left-0 w-full h-full z-20 pl-8 flex flex-col justify-center space-y-8 transition-transform duration-500 ease-in-out
          sm:static sm:flex sm:flex-row sm:items-center sm:justify-end sm:h-auto sm:w-auto sm:pl-0 sm:space-y-0 sm:space-x-5 sm:bg-white sm:text-[#344563] sm:text-base sm:font-normal sm:leading-normal sm:translate-y-0 sm:pointer-events-auto
          ${isMenuOpen ? 'translate-y-0 bg-[#201DCE99] text-white pointer-events-auto text-3xl font-semibold leading-10' : '-translate-y-full bg-transparent text-[#344563] pointer-events-none text-3xl font-semibold leading-10'}`}
      >
        <li>
          <a
            className="cursor-pointer"
            onClick={() => {
              handleNavigationClick('portfolioRef');
            }}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            className="cursor-pointer"
            onClick={() => {
              handleNavigationClick('aboutRef');
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            className="cursor-pointer"
            onClick={() => {
              handleNavigationClick('contactRef');
            }}
          >
            Contact
          </a>
        </li>
        <li>
          <a className="cursor-pointer" href="/blog">
            Blog
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
