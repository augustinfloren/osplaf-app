import PlaySlider from '../../Sliders/PlaySlider';
import arrow3 from '../../../../assets/icons/osplaf-arrow3.png';
import arrow4 from '../../../../assets/icons/osplaf-arrow4.png';
import portrait from '../../../../assets/portrait.png';
import { fb, insta, ulule, tiktok } from '../../../../assets/index';

import ContactForm from "./ContactForm";
import './Contact.scss'

function Contact() {
    return (
        <section className="contact">
            <div className="contact-content">
                <PlaySlider />
                <div className="contact-content__form" id="contact">
                    <img src={arrow3} alt="flêche" className='arrow3'/>
                    <h2>Contact</h2>
                    <ContactForm />
                </div>
                <div className="contact-content__bio">
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
                    <a href="https://www.facebook.com/profile.php?id=61580032438250" target="_blank">
                        <img src={fb} alt="icône facebook" />
                    </a>
                    <a href="https://www.instagram.com/ou_sont_les_artistes_femmes/?hl=fr" target="_blank">
                        <img src={insta} alt="icône instagram" />
                    </a>
                    <a href="https://www.tiktok.com/search?q=les_artistes_femmes&t=1758986609132" target="_blank">
                        <img src={tiktok} alt="icône tiktok" />
                    </a>
                    <a href="https://fr.ulule.com/lesartistesfemmes/" target="_blank">
                        <img src={ulule} alt="icône ulule" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact;