import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import BuyBtn from './BuyBtn';
import './Hero.scss'
import 'animate.css';
import box from '../../../../assets/game-content/osplaf-box.png'

function Hero() {
    const [isActive, setIsActive] = useState(false);

    return (
        <section className='hero' id="hero">
            <div className="hero-content">
                <div className="hero-content__text">
                    <h1><strong>Menez l'enquête</strong> pour retrouver quelle femme a été effacée de l'histoire de l'art !</h1>
                    <BuyBtn />
                </div>
                
                <div className="hero-content__img">
                    <img src={box} alt="Boîte du jeu" />
                </div>
            </div>
        </section>
    )
}

export default Hero;
