import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Btn from '../components/Btn';
import Skills from '../components/Skills';
import SocialMediaBar from '../components/SocialMediaBar';

const AboutSection = ({sectionRef, isActive}) => {
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
      id="about"
      ref={sectionRef}
      className={`flex flex-col sm:flex-row items-center sm:items-start justify-center py-28
      min-h-screen border-2 bg-white rounded-tr-[50px] px-6 gap-6
      opacity-0 ${animate ? 'opacity-100' : ''} transition-opacity duration-500 ease-in-out
      overflow-hidden
      `}>
      <div
        id="mySelf"
        className={`flex flex-col gap-3
      sm:max-w-[447px] md:w-2/5
      ${animate ? 'transform translate-y-0' : 'transform translate-y-full'}
      transition-transform ease-in-out duration-500 
      `}>
        <h2 className="font-bold text-4xl text-[#172B4D]">About Myself</h2>
        <p className="text-[#344563]">
          Navigating from childhood curiosity to full-stack web development, my
          journey blends tenacity and learning. &quot;Questions and Answers&quot; ignited
          my passion for understanding the world. At 16, I was guided by Dale
          Carnegie&apos;s wisdom and committed to community fitness. Transitioning to
          the software field, I dedicated 1.5 years to mastering by myself
          English for remote work. Despite setbacks, including illness, I
          embraced unfamiliar territories, showcasing adaptability and quick
          learning. Remote work at a call center honed language and
          problem-solving skills. At Microverse, amidst delivering for Uber, I
          mastered HTML, CSS, and Javascript, emerging as a resilient full-stack
          web developer. My coding journey reflects a commitment to tech growth.
          A passionate learner and achiever, fueled by curiosity and dedication
          to innovation.<br/>
          Fun-fact: when I was a child, I used to think that everyone spoke the same language.
        </p>
        <SocialMediaBar />
        <div>
          <a
            href="https://drive.google.com/file/d/1rckQXpJjK18qrsFbAi8FhVgk4NnHTGtJ/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <Btn text="Get my resume" />
          </a>
        </div>
      </div>

      <div
        id="skill-list"
        className={`"w-full 
      sm:max-w-[684px] md:w-3/5"
      ${animate ? 'transform translate-y-0 opacity-100' : 'transform translate-y-full'}
      transition-transform ease-in-out duration-500 
  `}>
        <Skills />
      </div>
    </section>
  );
};

AboutSection.propTypes = {
  sectionRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    .isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default AboutSection;
