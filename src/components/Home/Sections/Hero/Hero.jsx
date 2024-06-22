import Hexa from './Hexa';
import { motion } from "framer-motion";

import BuyBtn from './BuyBtn';
import './Hero.scss'
import 'animate.css';
import box from '../../../../assets/game-content/osplaf-box.png'

function Hero() {

    return (
        <section className='hero' id="hero">
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
                            duration: 0.1,
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001
                        }}
                    />
                    <Hexa />
                </div>
            </div>
        </section>
    )
}

export default Hero;
