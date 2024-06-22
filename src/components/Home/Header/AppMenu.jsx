import { delay, motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import Link from "./Link"

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
    const containerVariants = {
        show: { 
            translateX: 0,
            transition: { 
                type: "spring", duration: 0.7, bounce: 0.2,
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
            display: "flex"
            },

        hidden: { 
            translateX: -1000, 
            transition: {
                delay: 0.2,
                type: "spring", 
                duration: 1, 
                bounce: 0.5
            },
            transitionEnd: {
                display: "none",
            },
        },
    }
    const childrenVariants = {
        hidden: { 
            opacity: 0,
            scale: 0,
            transition: {
                delay: 0.2,
            },
        },
        show: { 
            opacity: 1,
            scale: 1,
        }
    }

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
                    onClick={handleClickedLinks}
                    variants={childrenVariants}
                >
                    <Link 
                        link={link}
                        index={i}
                    />
                </motion.div>
            ))}
        </motion.nav>
    )
}

export default AppMenu;