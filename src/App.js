import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Navbar from './Shared/Navbar';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Carousel from './Shared/Carousel';
import About from './Pages/About';
import Footer from './Shared/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
