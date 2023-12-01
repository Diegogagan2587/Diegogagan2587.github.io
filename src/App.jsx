import { useRef, useState } from 'react';
import IntroductionSection from './sections/IntroductionSection';
import NavigationBar from './components/NavigationBar';
import PortfolioSection from './sections/PortfolioSection';
import AboutSection from './sections/AboutSection';
import ContactForm from './sections/ContactForm';


function App() {
  const [activeSection, setActiveSection] = useState('introduction'); 
  // ['introductionRef', 'portfolioRef', 'aboutRef', 'contactRef'
  const introductionRef = useRef(null);
  const portfolioRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (refName) => {
    const sectionRef = {
      introductionRef,
      portfolioRef,
      aboutRef,
      contactRef,
    }[refName];

    if (sectionRef) {
       sectionRef.current.scrollIntoView({ behavior: 'smooth' })
        setActiveSection(refName);
    }
  };

  return (
    <>
      <header className='font-poppins'>
        <NavigationBar scrollToSection={scrollToSection} activeSection={activeSection}/>
      </header>
      <main className='bg-[#F4F5F7] font-poppins'>
        <IntroductionSection sectionRef={introductionRef}isActive={activeSection === 'introductionRef'}/>
        <PortfolioSection sectionRef={portfolioRef} isActive={activeSection===portfolioRef}/>
        <AboutSection sectionRef={ aboutRef } isActive={activeSection===aboutRef}/>
        <ContactForm sectionRef={ contactRef } isActive={activeSection===contactRef}/>
      </main>
    </>
  );
}

export default App;
