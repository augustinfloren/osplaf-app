import PlaySlider from '../Sliders/PlaySlider';
import arrow3 from '../../assets/icons/osplaf-arrow3.png';
import arrow4 from '../../assets/icons/osplaf-arrow4.png';
import portrait from '../../assets/portrait.png';
import { fb, insta, ulule } from '../../assets/index';

import './Contact.scss'

function Contact() {
    return (
        <section className="contact">
            <div className="contact-content">
                <PlaySlider />
                <div className="contact-content__form">
                    <img src={arrow3} alt="flêche" className='arrow3'/>
                    <h2>Contact</h2>

                    <form className='contact-form'>
                        <input className='contact-form__name' placeholder='Nom'></input>
                        <input className='contact-form__mail' placeholder='Mail'></input>
                        <input className='contact-form__objet' placeholder='Objet'></input>
                        <div className='contact-form__message'>
                            <textarea placeholder='Message'></textarea>
                        </div>
                    </form>
                </div>
                <div className="contact-content__bio">
                    <img className="arrow4" src={arrow4} alt="flèche" />
                    <div className='bio-img'>
                        <img src={portrait} alt="portrait de Sibylle Dubocq" />
                    </div>

                    <div className="bio-text">
                        <h3>Où sont passées les artistes femmes et un jeu conçu par Sibylle Duboc, artiste plasticienne qui vit et travaille à Marseille. </h3>
                        <p>Sibylle Duboc est une artiste plasticienne et médiatrice culturelle dont la pratique mélange expérimentations photographiques, sculpture, performance et vidéo. 
                        </p>
                        <p> Animée d'une volonté de partager et transmettre ses savoirs, elle mène de nombreuses actions artistiques et culturelles, conçoit des outils d'éducation à l'image et fabrique des jeux sur la photographie et l'histoire de l'art.
                        </p>
                    </div>
                </div>

                <div className="contact-content__network-icons">
                    <a href="">
                        <img src={fb} alt="icône facebook" />
                    </a>
                    <a href="">
                        <img src={insta} alt="icône facebook" />
                    </a>
                    <a href="">
                        <img src={ulule} alt="icône facebook" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact;