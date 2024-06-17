import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { NavLink } from 'react-router-dom';

function AppMenu({open, setOpen}) {
    const control = useAnimation();
    const boxVariant = {
        visible: { 
            opacity: 1, 
            transition: { 
                duration: 0.7, 
                type: "spring",
                bounce: 0.25
            },
            display: "flex"
            },

        hidden: { 
            opacity: 0,
            transitionEnd: {
                display: "none",
            },
        },
    }

    useEffect(() => {
        if (open) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, open]);

    function handleClickedLinks() {
        setOpen(!open);
    }

    return (
        <motion.nav 
            className="osplaf-menu"
            variants={boxVariant}
            initial="hidden"
            animate={control}
        >
            <NavLink to="/shop">Acheter</NavLink>
            <a 
                href="#lejeu"
                onClick={handleClickedLinks}
            >
                Le Jeu
            </a>
            <a 
                href="#regles"
                onClick={handleClickedLinks}
            >
                Règles du jeu
            </a>
            <a 
                href="#contact"
                onClick={handleClickedLinks}
            >
                Contact
            </a>

        </motion.nav>
    )
}

export default AppMenu;