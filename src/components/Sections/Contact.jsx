import PlaySlider from '../Sliders/PlaySlider';
import arrow3 from '../../assets/icons/osplaf-arrow3.png';
import './Contact.scss'

function Contact() {
    return (
        <section className="contact">
            <div className="contact-content">
                <PlaySlider />
                <div className="contact-content__form">
                    <img src={arrow3} alt="flêche" className='arrow3'/>
                    <h2>Contact</h2>
                </div>
            </div>
        </section>
    )
}

export default Contact;