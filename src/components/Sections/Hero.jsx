import './Hero.scss'
import box from '../../assets/osplaf-box.png'

function Hero() {
    return (
        <section className='hero'>
            <div className="hero__text">
                <h1><strong>Menez l'enquête</strong> pour retrouver quelle femme a été effacée de l'histoire de l'art !</h1>
                <a className="buy-button btn" href="#">Acheter le jeu</a>
            </div>
            
            <img className="hero__img" src={box} alt="Boîte du jeu" />
        </section>
    )
}

export default Hero;