import React from 'react';
import Footer from './footer';
import SlidingCards from './teams';
import CardsContainer from './members';
import About from './about';
import SideMenu from './floatingMenu';
import Banner from './Banner';

import Services from './services';
import Scope from './scope';
import WorkProcess from './work';
import Gallery from './gallery';
import ContactForm from './contact';
import Blogs from './Blogs';
import Clients from './Clients';

const Home = () => {
  return (
    <div> 
      
      <Banner />
      <Services  />

      <About />
      
<CardsContainer />
    
      <Scope />
      <WorkProcess /> 
      <Gallery/>
      <Clients />
      <SideMenu />
      <SlidingCards className="mb-28" /> 
      <Blogs />
      <ContactForm/>
      <Footer />
    </div>
  );
};

export default Home;
