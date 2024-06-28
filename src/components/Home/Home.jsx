import { useState, useEffect } from 'react';
import LoadingContext from "./Loading/LoadingContext";
import { useContext } from "react";
import { motion } from "framer-motion";
import './Home.scss';
import Loading from './Loading/Loading'
import Header from './Header/Header';
import Hero from './Sections/Hero/Hero';
import LeJeu from './Sections/LeJeu/LeJeu';
import Regles from './Sections/Regles/Regles';
import Contact from './Sections/Contact/Contact';
import Footer from './Footer/Footer';

function Home() {
  const { hasLoaded, setHasLoaded } = useContext(LoadingContext);

  useEffect(() => {
    if (!hasLoaded) {
      const handleLoad = () => {
        setTimeout(() => {
          document.body.style.overflow = 'auto';
          setHasLoaded(true);
        }, 500); 
      };
  
      window.addEventListener('load', handleLoad);
      document.body.style.overflow = 'hidden';
  
      return () => {
          window.removeEventListener('load', handleLoad);
          document.body.style.overflow = 'auto';
      };
    }
  }, [hasLoaded]);
  
  return (
    <>
      {!hasLoaded && <Loading/>}
        <motion.div 
          className='container'
          initial={{
            opacity:0,
          }}
          animate={hasLoaded && {
            opacity: 1,
            transition: {
              duration: 0.5,
              ease: "easeIn",
            },
          }}
        > 
            <Header hasLoaded={hasLoaded}/>
            <Hero hasLoaded={hasLoaded}/>
            <LeJeu />
            <Regles />
            <Contact />
            <Footer />
        </motion.div>
    </>
  );
};

export default Home;


