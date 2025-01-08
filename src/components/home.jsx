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
    <section id="home">
    <div>
    <Banner />
     
      <About />
      <Clients />
      <Services />
      <WorkProcess />
      <Scope />
      <CardsContainer />
      <SlidingCards />
      <Gallery />
      <SideMenu />
      <Blogs />
      <ContactForm />
      <Footer />
    </div>
    
    </section>

  );
};

export default Home;
