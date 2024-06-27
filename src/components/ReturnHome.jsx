import arrow from "../assets/icons/osplaf-arrow3.png"

import {motion, transform} from "framer-motion";

function ReturnHome() {
    return (
        <motion.a 
            href="/"
            className="return"
            style={{
                position: "absolute",
                top: "2rem",
                transform: "scale(1)"
            }}
            whileHover={{
                transform: "scale(1.2)"
            }}
        >
        <img 
            src={arrow} 
            alt="flêche de retour à l'accueil" 
            style={{
                cursor: "pointer",
                left: "-4rem",
                top: "2rem",
                transform: "rotate(150deg)",
                width: "max(7rem, 5vw)",
            }}
        />
    </motion.a>
    )
}

export default ReturnHome;