import './LeJeu.scss'
import arrow1 from '../../assets/icons/osplaf-arrow1.png'
import artists from '../../assets/index'

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
                <div className='artists_container'>
                    {artists.map((artist) => (
                        <div key={artist.name} className="artist">
                            <img src={artist.src} alt={`Portrait de ${artist.name}`} />
                            <h5>{artist.name}</h5>
                            <p>{artist.date}</p>
                        </div>
                    ))} 
                </div>
            </div>
        </section>
    )
}

export default LeJeu;
