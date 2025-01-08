// import React from 'react';
// import { BrowserRouter , Routes, Route} from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Banner from './components/Banner';
// import AboutUs from './components/about_us_page';
// import SlidingCards from './components/teams';
// import Gallery from './components/gallery';
// import Home from './components/home';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Navbar/> {/* Your navbar component */}
//       <Routes>
//         <Route path="/home" element={<Home/>} />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/clients" element={<SlidingCards />} />
//         <Route path="/gallery" element={<Gallery />} />
//       </Routes>
      
//       {/* Optional Footer */}
//     </BrowserRouter>
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import   About from './components/about';
import SlidingCards from './components/teams';
import Gallery from './components/gallery';
import Home from './components/home';
import Clients from './components/Clients';
import './index.css';
import ContactForm from './components/contact';
import Blogs from './components/Blogs';

const App = () => {
  return (
    <div>
      
    <Navbar/> 


    <BrowserRouter>
      {/* Your navbar component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/team" element={< SlidingCards/>} />



        

        
      </Routes>
      
      {/* Optional Footer */}
    </BrowserRouter>
    </div>
   
    
  );
};

export default App;