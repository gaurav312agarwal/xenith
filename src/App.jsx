import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './container/Banner/Banner';
import About from './container/About/About';
import Footer from './components/Footer/Footer';
import Team from './container/Team/Team';
import Events from './container/Events/Events'
// import Gallery from './container/Gallery/Gallery';
import {Gallery} from './container/Gallery/Gallery-3D';
import Sponsors from './container/Sponsors/Sponsors';
import Preloader from './components/Preloader/Preloader'; // Import the Preloader component
import Timeline from './container/Timeline/Timeline';
import EventPage from './pages/EventPage';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data) for 3 seconds
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 5300));
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="app">
      {loading ? (
        <Preloader />
      ) : (
        <>
        
          <Navbar />
          <Banner />
          <About />
          <Timeline />

          <Events/>
          <Team />
          <Gallery />
          <Sponsors/>
          <Footer /> 
          {/*<EventPage/>*/}
        </>
      )}
    </div>
  );
}

export default App;