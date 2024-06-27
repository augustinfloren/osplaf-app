import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
// import Link from "./Link";
import { Link } from "react-scroll";

const links = [
    {
        id: "link-acheter",
        href: "#hero",
        section: "hero",
        name: "Acheter",
    },
    {
        id: "link-lejeu",
        href: "#lejeu",
        section: "lejeu",
        name: "Le jeu",
    },
    {
        id: "link-regles",
        href: "#regles",
        section: "regles",
        name: "Les règles"
    },
    {
        id: "link-contact",
        href: "#contact",
        section: "contact",
        name: "Contact",
    }
]

function AppMenu({open, setOpen}) {
    const control = useAnimation();
    const containerVariants = {
        show: { 
            translateX: 0,
            transition: { 
                ease: "easeOut",
                duration: 0.3, 
                staggerChildren: 0.05,
                delayChildren: 0.2,
            },
            display: "flex"
            },

        hidden: { 
            translateX: -1000, 
            transition: {
                delay: 0.2,
                ease: "easeIn", 
                duration: 0.3, 
                staggerChildren: 0.05, 
                staggerDirection: -1
            },
            transitionEnd: {
                display: "none",
            },
        },
    };
    const childrenVariants = {
        hidden: { 
            opacity: 0,
            scale: 0,
        },
        show: { 
            opacity: 1,
            scale: 1,
        }
    };

    useEffect(() => {
        if (open) {
            control.start("show");
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
            variants={containerVariants}
            initial="hidden"
            animate={control}
        >
            {links.map((link, i) => (
                <motion.div
                    key={link.id}
                    variants={childrenVariants}
                >
                    <motion.div
                        whileHover={{
                            scale: 0.8, 
                            rotate: i % 2 === 0 ? -5 : 5,
                            transition: {
                                rotate: {
                                    duration: 0.3,
                                    type: "spring",
                                    bounce: 0.3
                                }
                            }
                        }}
                        whileTap={{ 
                            scale: [0.9, 1.2, 0.9], 
                        }}
                    >
                        <Link
                            onClick={handleClickedLinks}
                            activeClass="active"
                            smooth spy to={link.section}
                        >
                            {link.name}
                        </Link>
                    </motion.div>
                </motion.div>
            ))}
        </motion.nav>
    )
}

export default AppMenu;