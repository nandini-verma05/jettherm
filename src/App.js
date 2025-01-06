import React from 'react';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import AboutUs from './components/about_us_page';
import SlidingCards from './components/teams';
import Gallery from './components/gallery';
import Home from './components/home';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/> {/* Your navbar component */}
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/clients" element={<SlidingCards />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      
      {/* Optional Footer */}
    </BrowserRouter>
  );
};

export default App;