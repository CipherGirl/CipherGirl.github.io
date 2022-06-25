import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Shared/Navbar';
import Contact from './Pages/Home/Contact';
import Project from './Pages/Project';
import Projects from './Pages/Home/Projects';
import Carousel from './Shared/Carousel';
import About from './Pages/Home/About';
import Footer from './Shared/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          scrollToTop
          path="/projects/:id"
          element={<Project />}
        ></Route>{' '}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
