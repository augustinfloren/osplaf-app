import './LeJeu.scss';
import arrow1 from '../../assets/icons/osplaf-arrow1.png';
import arrow2 from '../../assets/icons/osplaf-arrow2.png';
import cards from '../../assets/game-content/osplaf-cartes.png';
import artists from '../../assets/index'

import ContentSlider from '../Sliders/ContentSlider';

function LeJeu() {
    return (
        <section className='lejeu'>
            <img src={arrow1} alt="flêche" className='arrow1'/>
            <div className="lejeu-content__intro">
                <h2>Le Jeu</h2>
                <p>Les artistes femmes ont été empêchées d’apprendre et de pratiquer leur art. Celles qui ont malgré tout réussi à devenir artistes ont été progressivement effacées de l’histoire. Pourtant, certaines sont parvenues jusqu’à nous malgré ces obstacles.
                </p>
            </div>
            <div className="lejeu-content__artists">
                <h3>Elles s'appelaient...</h3>
                <div className='artists__container'>
                    {artists.map((artist) => (
                        <div key={artist.name} className="artist">
                            <img src={artist.src} alt={`Portrait de ${artist.name}`} />
                            <div className="artist__text">
                                <h5>{artist.name}</h5>
                                <p>{artist.date}</p>
                            </div>
                        </div>
                    ))} 
                </div>
            </div>
            <div className="lejeu-content__presentation">
                <img src={arrow2} alt="flèche" className='arrow2'/>
                <div className="lejeu-content__presentation__text">
                    <h3>Dans ce jeu, vous incarnez une artiste femme qui mène l’enquête afin de découvrir la peintresse* qui a disparu de l’histoire de l’art. 
                    </h3>
                    <p>
                    Au cours de la partie, vous devrez récupérer les indices des autres artistes femmes incarnées dans le jeu, et ainsi en apprendre davantage sur leur vie, leur œuvre et leur époque. Vous pourrez être censurée, mais aussi choisir de vous révolter ou de faire preuve de sororité. 
                    </p>
                    <p>
                    En plus de votre activité d’artiste, vous pouvez devenir directrice d’un atelier d’artistes femmes, présidente d’une association de lutte pour les droits des femmes, ou encore rédactrice en chef d’un journal féministe. 
                    </p>
                    <p>
                    *féminin de «peintre», utilisé jusqu’au XVIIe siècle. 
                    </p>
                </div>
                <div className="lejeu-content__presentation__img">
                    <img src={cards} alt="Main tenant des cartes" />
                </div>
            </div>

            <ContentSlider />
            
        </section>
    );
}

export default LeJeu;
