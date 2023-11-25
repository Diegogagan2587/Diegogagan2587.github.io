import IntroductionSection from './sections/IntroductionSection';
import NavigationBar from './components/NavigationBar';
import PortfolioSection from './sections/PortfolioSection';


function App() {
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <main>
        <IntroductionSection />
        <PortfolioSection />
      </main>
    </>
  );
}

export default App;
