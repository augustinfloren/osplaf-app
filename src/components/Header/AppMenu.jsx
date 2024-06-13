import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";


function AppMenu({open}) {
    const control = useAnimation();
    const boxVariant = {
        visible: { 
            opacity: 1, 
            transition: { 
                duration: 0.5, 
                type: "spring",
                bounce: 0.25
            } },
        hidden: { 
            opacity: 0,
        },
    }

    useEffect(() => {
        if (open) {
            control.start("visible");

            document.querySelector("body").style.overflow = "hidden";
        } else {
            control.start("hidden");
            document.querySelector("body").style.overflow = "";
        }
    }, [control, open]);

    return (
        <motion.nav 
            className="osplaf-menu"
            variants={boxVariant}
            initial="hidden"
            animate={control}
        >
            <a href="#">Acheter</a>
            <a href="#">Le Jeu</a>
            <a href="#">Règles du jeu</a>
            <a href="#">Contact</a>

        </motion.nav>
    )
}

export default AppMenu;