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
import Clients from './clients';
import AnimationWrapper from './animations/AnimationWrapper';
const Home = () => {
  return (
   
    <section
      id="home"
      style={{
        overflowX: 'hidden', // Restrict horizontal scrolling
        width: '100vw', // Ensure container width fits the viewport
      }}
    >
      <div>
       
          <Banner />
        

        <AnimationWrapper direction="left" delay={0.1}>
          <About />
        </AnimationWrapper>
        <Clients />
        
        <AnimationWrapper direction="top" delay={0.2} >
          <CardsContainer />
        </AnimationWrapper>
        <AnimationWrapper direction="right" delay={0.2} >
          <Scope />
        </AnimationWrapper>
        <AnimationWrapper direction="left" delay={0.2}>
          <WorkProcess />
        </AnimationWrapper>

        
       

        <AnimationWrapper direction="left" delay={0.2}>
          <Services />
        </AnimationWrapper>

        

        


       
          <SlidingCards />
       

       
        <Gallery />
       
        
      

          <SideMenu />
       

          <Blogs />
 

        <AnimationWrapper direction="bottom" >
          <ContactForm />
        </AnimationWrapper>

   
          <Footer />
   
      </div>
    </section>
  );
};

export default Home;
