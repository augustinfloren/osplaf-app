import Hexa from './Hexa';
import { useEffect } from 'react';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useRefs } from '../../RefContext';

import BuyBtn from './BuyBtn';
import './Hero.scss'
import 'animate.css';
import box from '../../../../assets/game-content/osplaf-box.png'

function Hero() {
    const { sectionRef, setSectionInView } = useRefs();
    const { ref: inViewRef, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5 // Ajustez ce seuil selon les besoins
    });

    useEffect(() => {
        setSectionInView(inView);
    }, [inView, setSectionInView]);

    return (
        <section 
            className='hero' 
            id="hero"
            ref={node => {
                sectionRef.current = node;
                inViewRef(node); // Connecter useInView à la même référence
            }}
        >
            <div className="hero-content">
                <div className="hero-content__text">
                    <h1><strong>Menez l'enquête</strong> pour retrouver quelle femme a été effacée de l'histoire de l'art !</h1>
                    <BuyBtn />
                </div>
                
                <div className="hero-content__img">
                    <motion.img 
                        className="box"
                        src={box} 
                        alt="Boîte du jeu" 
                        whileHover={{
                            scale: 1.05,
                        }}
                        transition={{
                            type: "spring",
                            duration: 0.5,
                            bounce: 0.5
                        }}
                    />
                    <Hexa />
                </div>
            </div>
        </section>
    )
}

export default Hero;
