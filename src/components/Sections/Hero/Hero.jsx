import { useState } from 'react';
import './Hero.scss'
import 'animate.css';
import box from '../../../assets/game-content/osplaf-box.png'

function Hero() {
    const [isActive, setIsActive] = useState(false);

    return (
        <section className='hero'>
            <div className="hero-content">
                <div className="hero-content__text animate__animated animate__bounceIn">
                    <h1><strong>Menez l'enquête</strong> pour retrouver quelle femme a été effacée de l'histoire de l'art !</h1>
                    <a 
                        className={`buy-button btn ${isActive ?" animate__animated animate__jello" : ""}`}
                        href="#" 
                        onMouseEnter={() => setIsActive(true)}
                        onMouseLeave={() => setIsActive(false)}
                    >
                        Acheter le jeu
                    </a>
                </div>
                
                <div className="hero-content__img animate__animated animate__bounceIn">
                    <img src={box} alt="Boîte du jeu" />
                </div>
            </div>
        </section>
    )
}

export default Hero;