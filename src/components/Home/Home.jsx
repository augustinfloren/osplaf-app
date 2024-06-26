import { RefProvider } from './RefContext';

import './Home.scss';

import Header from './Header/Header';
import Hero from './Sections/Hero/Hero';
import LeJeu from './Sections/LeJeu/LeJeu';
import Regles from './Sections/Regles/Regles';
import Contact from './Sections/Contact/Contact';
import Footer from './Footer/Footer'

function Home() {
  return (
    <div className='container'> 
      <Header />
      <Hero />
      <LeJeu />
      <Regles />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;


