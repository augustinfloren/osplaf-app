import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { NavLink } from 'react-router-dom';

const links = [
    {
        id: "link-acheter",
        href: "#hero",
        name: "Acheter",
    },
    {
        id: "link-lejeu",
        href: "#lejeu",
        name: "Le jeu",
    },
    {
        id: "link-regles",
        href: "#regles",
        name: "Les règles"
    },
    {
        id: "link-contact",
        href: "#contact",
        name: "Contact",
    }
]

function AppMenu({open, setOpen}) {
    const control = useAnimation();
    const boxVariant = {
        visible: { 
            opacity: 1, 
            translateX: 0,
            transition: { 
                type: "spring", duration: 0.7, bounce: 0.2
            },
            display: "flex"
            },

        hidden: { 
            opacity: 0,
            translateX: -1000, 
            transition: { 
                type: "spring", duration: 1, bounce: 0.5
            },
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
            {links.map((link, i) => (
                <motion.a 
                    key={link.id}
                    href={link.href}
                    onClick={handleClickedLinks}

                    whileHover={{
                        scale: 0.8,
                        rotate: i % 2 === 0 ? -5 : 5,
                        transition: {
                            type: "spring", duration: 0.5, bounce: 0.5
                        },
                    }}

                    whileTap= {{
                        scale: 1,
                    }}
                >
                    {link.name}
                </motion.a>
            ))}
        </motion.nav>
    )
}

export default AppMenu;