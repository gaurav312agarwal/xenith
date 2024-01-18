import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './container/Banner/Banner';
import About from './container/About/About';
import Footer from './components/Footer/Footer';
import Team from './container/Team/Team';
import Events from './container/Events/Events'
import Gallery from './container/Gallery/Gallery';
import Sponsors from './container/Sponsors/Sponsors';
import Preloader from './components/Preloader/Preloader'; // Import the Preloader component

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data) for 3 seconds
    const fetchData = async () => {
<<<<<<< HEAD
      await new Promise((resolve) => setTimeout(resolve,5300));
=======
      await new Promise((resolve) => setTimeout(resolve, 5300));
>>>>>>> parent of 0e895ef (check)
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
          <Events/>
          <Team />
          <Gallery />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;