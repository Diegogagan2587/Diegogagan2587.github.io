import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import SocialMediaBar from '../components/SocialMediaBar';

const IntroductionSection = ({sectionRef, isActive}) => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(false)
      setTimeout(() => {
        setAnimate(true)
      }, 500);
    
  }, [isActive]);

  useEffect(() => {
    // Set animate to true after the component mounts
    setAnimate(true);
  }, []);
  return (
    <section
      id="introduction-section"
      ref={sectionRef}
      className="p-6 border-t-[36px] w-full bg-white h-screen flex flex-col justify-center items-center
      rounded-bl-[64px] border-2
      bg-[url('./assets/img/header-shapes-mobile@2x.svg')] bg-no-repeat bg-cover
      md:bg-[url('./assets/img/header-shapes-desktop@2x.svg')] md:bg-no-repeat md:bg-cover md:bg-right-bottom
      "
      //style={backgroundStyle}
    >
      <div className="flex flex-col gap-5 max-w-[920px]">
        <div className='flex flex-col gap-5 overflow-hidden'>
          <h1 className={`text-4xl font-bold leading-[52px] text-[#172B4D]
                ${animate ? 'transform translate-y-0 opacity-100' : 'transform translate-y-full'}
                transition-transform ease-in-out duration-500 
          `}>
            I&apos;m Diego Vidal
            <br />
            Full-stack Web Developer.
          </h1>
          <p className={`text-base leading-6 text-[#344563]
          ${animate ? 'transform translate-y-0 opacity-100' : 'transform translate-y-full '}
          transition-transform ease-in-out duration-500 delay-100
          `}>
            I&apos;m a seasoned Full-Stack Web Developer, adept at crafting
            functional Single Page Applications, robust Server Side Rendering
            Websites, and powerful APIs. Specializing in JavaScript, React, Redux,
            Tailwind-CSS, Ruby on Rails, PostgreSQL, and more, I bring over 2,500
            hours of hands-on experience in building, testing, and debugging
            software.
            <br /> Check out my work below or reach out to me in the Contact
            Section.
          </p>
        </div>
        <SocialMediaBar />
      </div>
    </section>
  );
};

IntroductionSection.propTypes = {
  sectionRef: PropTypes.shape(
    { current: PropTypes.instanceOf(Element) },
  ).isRequired,
};

export default IntroductionSection;
