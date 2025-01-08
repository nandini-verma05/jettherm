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
import Clients from './client';
import AnimationWrapper from './animations/AnimationWrapper';

const Home = () => {
  return (
    <section id="home">
      <div>
        <AnimationWrapper direction="bottom">
          <Banner />
        </AnimationWrapper>

        <AnimationWrapper direction="left" delay={0.1}>
          <About />
        </AnimationWrapper>

        <AnimationWrapper direction="right" delay={0.2}>
          <Clients />
        </AnimationWrapper>

        <AnimationWrapper direction="bottom" delay={0.3}>
          <Services />
        </AnimationWrapper>

        <AnimationWrapper direction="left" delay={0.4}>
          <WorkProcess />
        </AnimationWrapper>

        <AnimationWrapper direction="right" delay={0.5}>
          <Scope />
        </AnimationWrapper>

        <AnimationWrapper direction="bottom" delay={0.5}>
          <CardsContainer />
        </AnimationWrapper>

        <AnimationWrapper direction="left" delay={0.5}>
          <SlidingCards />
        </AnimationWrapper>

        <AnimationWrapper direction="right" delay={0.5}>
          <Gallery />
        </AnimationWrapper>

        <AnimationWrapper direction="bottom" delay={0.5}>
          <SideMenu />
        </AnimationWrapper>

        <AnimationWrapper direction="left" delay={0.5}>
          <Blogs />
        </AnimationWrapper>

        <AnimationWrapper direction="right" delay={0.5}>
          <ContactForm />
        </AnimationWrapper>

   
          <Footer />
   
      </div>
    </section>
  );
};

export default Home;
