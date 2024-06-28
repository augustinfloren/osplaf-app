import ReturnHome from "../ReturnHome";
import "./MentionsLegales.scss";
import Footer from "../Home/Footer/Footer";
import { motion } from "framer-motion";
import LoadingContext from "../Home/Loading/LoadingContext";
import { useContext } from "react";

function Cgv() {
    const { setHasLoaded } = useContext(LoadingContext);
    setHasLoaded(true);

    return (
        <motion.div 
            className="legal-container"
            initial={{opacity: 0}}
            animate={{
                opacity: 1
            }}
            transition={{
                ease: "easeIn"
            }}
        >
            <section id="legal">
                <ReturnHome />
                <h2>Mentions Légales</h2>
                <h3>Informations Générales</h3>
                <ul>
                    <li>
                        Nom du site : Où sont passées les artistes femmes
                    </li>
                    <li>
                        URL du site : www.lesartistesfemmes.fr
                    </li>
                </ul>
                
                <h3>Éditeur du site</h3>
                <ul>
                    <li>
                        Nom de l'entreprise : Phanéro
                    </li>
                    <li>
                        Forme juridique : Association
                    </li>
                    <li>
                        Adresse du siège social : 13001 MARSEILLE
                    </li>
                </ul>
                <h3>Litiges</h3>
                <p>
                Les présentes conditions du site www.lesartistesfemmes.fr sont régies par les lois françaises et toute contestation ou litiges qui pourraient naître de l'interprétation ou de l'exécution de celles-ci seront de la compétence exclusive des tribunaux dont dépend le siège social de la société Phanero. La langue de référence, pour le règlement de contentieux éventuels, est le français.
                </p>
            </section>
            <Footer/>
        </motion.div>
    )
}

export default Cgv;