import IntroductionSection from './sections/IntroductionSection';
import NavigationBar from './components/NavigationBar';
import PortfolioSection from './sections/PortfolioSection';
import AboutSection from './sections/AboutSection';
import ContactForm from './sections/ContactForm';


function App() {
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <main>
        <IntroductionSection />
        <PortfolioSection />
        <AboutSection />
        <ContactForm />
      </main>
    </>
  );
}

export default App;
