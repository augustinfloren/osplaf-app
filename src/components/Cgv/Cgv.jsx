import ReturnHome from "../ReturnHome";
import "./Cgv.scss";
import Footer from "../Home/Footer/Footer";
import { motion } from "framer-motion";
import LoadingContext from "../Home/Loading/LoadingContext";
import { useContext } from "react";

function Cgv() {
    const { setHasLoaded } = useContext(LoadingContext);
    setHasLoaded(true);

    return (
        <motion.div 
            className="cgv-container"
            initial={{opacity: 0}}
            animate={{
                opacity: 1
            }}
            transition={{
                ease: "easeIn"
            }}
        >
            <section id="cgv">
                <ReturnHome />
                <h2>Conditions Générales de Vente (CGV)</h2>
                <h3>Préambule</h3>
                <p>
                Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre, d'une part, l'association Phanéro , dont le siège social est situé à Marseille, immatriculée sous le numéro de SIRET 92329327800019, ci-après dénommée "le Vendeur", et d'autre part, toute personne physique ou morale souhaitant procéder à un achat via le site internet www.lesartistesfemmes.fr, ci-après dénommée "l'Acheteur".
                </p>
                <h3>1. Objet</h3>
                <p>
                Les présentes CGV visent à définir les modalités de vente à distance entre le Vendeur et l'Acheteur, de la commande au paiement et à la livraison. Elles règlent toutes les étapes nécessaires à la passation de la commande et assurent le suivi de cette commande entre les parties contractantes.
                </p>
                <h3>2. Produits</h3>
                <p>
                Le produit proposé à la vente est le jeu de plateau intitulé "Où sont passées les artistes femmes". Ce jeu est vendu au prix de 50€ toutes taxes comprises (TTC).
                </p>
                <h3>3. Commande</h3>
                <p>
                L'Acheteur passe commande sur le site internet www.lesartistesfemmes.fr. Pour que la commande soit validée, l'Acheteur devra accepter les présentes CGV en cochant la case prévue à cet effet. La commande sera confirmée par e-mail.
                </p>
                <h3>4. Prix</h3>
                <p>Les prix sont indiqués en euros (€) et toutes taxes comprises (TTC). Le Vendeur se réserve le droit de modifier ses prix à tout moment, mais s'engage à appliquer les tarifs en vigueur indiqués au moment de la commande.
                </p>
                <h3>5. Modalités de paiement</h3>
                <p>
                Le paiement s'effectue en ligne par carte bancaire (Visa, MasterCard, American Express) ou via des plateformes de paiement sécurisé (PayPal). Le débit est effectué au moment de la validation de la commande.
                </p>
                <h3>6. Livraison</h3>
                <p>
                Les produits sont livrés à l'adresse de livraison indiquée lors de la commande. Les frais de livraison sont à la charge de l'acheteur.  
                </p>
                <h3>7. Droit de rétractation</h3>
                <p>
                Conformément à la législation en vigueur, l'Acheteur dispose d'un délai de 14 jours à compter de la réception du produit pour exercer son droit de rétractation sans avoir à justifier de motifs ni à payer de pénalités. Le produit doit être retourné en parfait état, dans son emballage d'origine. Les frais de retour sont à la charge de l'Acheteur.
                </p>
                <h3>8. Garanties</h3>
                <p>
                Le Vendeur est responsable des défauts de conformité du produit conformément aux articles L.217-4 et suivants du Code de la consommation et des vices cachés dans les conditions prévues aux articles 1641 et suivants du Code civil.
                </p>
                <h3>9. Responsabilité</h3>
                <p>
                Le Vendeur ne saurait être tenu pour responsable de l'inexécution du contrat conclu en cas de force majeure, perturbation ou grève totale ou partielle notamment des services postaux et moyens de transport et/ou communications.
                </p>
                <h3>10. Service après-vente</h3>
                <p>
                Pour toute question ou réclamation, l'Acheteur peut contacter le service après-vente du Vendeur par e-mail à contact@lesartistesfemmes.fr. 
                </p>
                <h3>11. Droit applicable et juridiction compétente</h3>
                <p>
                Les présentes CGV sont soumises à la loi française. En cas de litige et à défaut de solution amiable, les tribunaux français seront seuls compétents.
                </p>
            </section>
            <Footer/>
        </motion.div>
    )
}

export default Cgv;