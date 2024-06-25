import { delay, motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "./Link";
import { useRefs } from '../RefContext';

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
    const [activeAnchor, setActiveAnchor] = useState('');
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
    const { sectionInView, sectionRef } = useRefs();

    const [linkStyle, setLinkStyle] = useState({});

    useEffect(() => {
        if (sectionInView) {
            console.log(sectionRef.current.id)
            setLinkStyle({
                textDecoration: "underline"
            })
        } else {
            setLinkStyle({
                textDecoration: "none"
            })
        }
    }, [sectionInView]);

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
                        activeAnchor={activeAnchor} 
                        setActiveAnchor={setActiveAnchor}
                        customStyle={link.section === sectionRef.current.id ? linkStyle : ""}
                    />
                </motion.div>
            ))}
        </motion.nav>
    )
}

export default AppMenu;