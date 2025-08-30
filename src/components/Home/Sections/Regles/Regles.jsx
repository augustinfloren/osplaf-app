import Dropdown from './Dropdown';
import { motion } from "framer-motion";
import './Regles.scss';
import sheets from '../../../../assets/Fiches-enquetes_OSPLAF.pdf';

const rules = [
    {
        name: "Préparation du jeu",
        description: [
            "Chaque joueur·euse prend 1 chevalet, 1 livret rouge avec 1 fiche d’enquête, et 1 enveloppe. Mettez la fiche d’enquête à la dernière page du livret rouge. Posez le contenu de votre enveloppe sur le chevalet (contenant 1 carte PEINTRESSE, 3 cartes ARTISTE, 3 cartes ŒUVRE, 3 cartes ÉPOQUE).",
            "Il reste une enveloppe au milieu de la table. Si vous jouez à 4 au lieu de 5, choisissez une artiste à éliminer du jeu et enlevez son enveloppe. Vous pouvez jouer à 3 et enlever 2 enveloppes, mais le jeu sera plus simple et plus court.",
            "Les images des œuvres sont réparties sur la table, elles peuvent être consultées à tout moment de la partie. Les cartes action, faces non-visibles, sont posées au centre de la table."
        ]
    },
    {
        name: "But du jeu",
        description:
            "Les artistes femmes ont été effacées de l’Histoire de l’Art ! Menez l’enquête afin de retrouver l’artiste manquante de la partie. Vous devez trouver l’identité de l’artiste mystère, laissée dans l’enveloppe au centre de la table, en découvrant les identités des autres artistes incarnées dans le jeu."
    },
    {
        name: "Déroulement d’une partie",
        description: [
            "Piochez une carte RÔLE et réalisez les échanges de cartes liés à ce rôle (si vous êtes présidente, directrice ou savante, les autres rôles s’utilisent au cours de la partie). Si c’est votre toute première partie, il est conseillé de jouer sans les cartes rôle et de les introduire à la partie suivante.",
            "Piochez 5 cartes ACTION. Le·a joueur·euse qui a la première lettre de son prénom la plus proche du « A » commence à jouer. Puis, c’est la personne à sa gauche. À chaque tour, faites une action qui correspond à une de vos cartes, puis piochez de manière à toujours avoir 5 cartes ACTION en main.",
            "Notez dans votre fiche d’enquête, les indices que vous trouverez au fur et à mesure dans votre livret rouge. Ce livret et les reproductions des œuvres sont consultables tout au long de la partie. Profitez des moments en dehors de votre tour pour lire le livret et regarder les œuvres.",
            "Obtenir une carte d’un·e autre joueur·euse : Lorsque vous demandez une carte, la personne désignée prend toutes les cartes de son chevalet et vous fait piocher au hasard la carte de la couleur demandée. Elle ne peut pas choisir la carte qu’elle va vous montrer. Si vous piochez une carte que vous connaissez déjà, vous ne pouvez pas repiocher. La carte peintresse ne pouvant jamais être piochée, vous pouvez la cacher pour éviter qu’un regard indiscret ne l’aperçoive..."
        ]
    },
    {
        name: "Fin d’une partie",
        description: [
            "Lorsque vous pensez avoir trouvé l’identité des autres joueur·euses, vous pouvez déduire qui est la peintresse mystère qui se situe au milieu de la table. Lorsque c’est votre tour de jouer, vous formulez à voix haute votre hypothèse. Attention, si vous jouez, vous ne pouvez plus formuler d’hypothèse, et vous devez attendre le prochain tour ! Pour énoncer votre hypothèse, dites : « Je pense que l’artiste femme effacée de l’Histoire de l’art est... » suivi du nom de l’artiste.",
            "Vous regardez alors le contenu de l’enveloppe au centre de la table, sans le montrer aux autres. Si votre hypothèse est juste, vous avez gagné, la partie est finie ! Si vous avez faux, vous êtes éliminé·e, vous reposez l’enveloppe au milieu de la table et la partie continue."
        ]
    }
];

function Regles() {
    return (
        <section className='regles' id='regles'>
            <div className="regles__content">
                <div className='regles__content__title'>
                    <h2>Règles du jeu</h2>
                    <p>• Le jeu est prévu pour 3 à 5 joueur·euses à partir de 13 ans.</p>
                </div>
                
                <div className="regles__content__phase-container">
                {rules.map((rule) => (
                    <Dropdown content={rule} key={rule.name}/>
                ))}
                </div>
                
                <motion.a 
                    className="regles__content__download" 
                    href={sheets}
                    download="Fiches-enquetes_OSPLAF.pdf"
                    whileHover={{ 
                        scale: 0.9, 
                        backgroundColor: "#FFE5E5",
                        color: "#5637BF",
                        fontWeight: 600,
                        transition: {
                            duration: 0.3,
                            scale: { type: 'spring', stiffness: 1000, damping: 50, bounce: 5 }
                        }
                    }}
                    whileTap={{ 
                        scale: [0.9, 1.2, 0.9], 
                    }}
                >
                    Télécharger les fiches enquêtes
                </motion.a>
            </div>
        </section>
    );
}

export default Regles;