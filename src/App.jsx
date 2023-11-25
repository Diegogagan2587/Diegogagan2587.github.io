import IntroductionSection from './sections/IntroductionSection';
import NavigationBar from './components/NavigationBar';


function App() {
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <main>
        <IntroductionSection />
      </main>
    </>
  );
}

export default App;
