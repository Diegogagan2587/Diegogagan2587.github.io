import { useRef } from 'react';
import IntroductionSection from './sections/IntroductionSection';
import NavigationBar from './components/NavigationBar';
import PortfolioSection from './sections/PortfolioSection';
import AboutSection from './sections/AboutSection';
import ContactForm from './sections/ContactForm';


function App() {
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
    }
  };

  return (
    <>
      <header className='font-poppins'>
        <NavigationBar scrollToSection={scrollToSection} />
      </header>
      <main className='bg-[#F4F5F7] font-poppins'>
        <IntroductionSection sectionRef={introductionRef}/>
        <PortfolioSection sectionRef={portfolioRef} />
        <AboutSection sectionRef={ aboutRef }/>
        <ContactForm sectionRef={ contactRef }/>
      </main>
    </>
  );
}

export default App;
