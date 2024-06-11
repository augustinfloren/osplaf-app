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

                    <form className='contact-form'>
                        <input className='contact-form__name' placeholder='Nom'></input>
                        <input className='contact-form__mail' placeholder='Mail'></input>
                        <input className='contact-form__objet' placeholder='Objet'></input>
                        <div className='contact-form__message'>
                            <textarea placeholder='Message'></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;