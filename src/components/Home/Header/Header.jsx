import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import AppMenu from "./AppMenu.jsx";
import "./Header.scss";
import {
    menu,
    menu2,
    logo2
} from '../../../assets/index.js';

function Header(props) {
    const [open, setOpen] = useState(false);

    const burgerVariants = {
        initial: {
            backgroundColor: "#5637BF",
        },
        click: {
            backgroundColor: "#FFE5E5",
        },
        hover: {
            top: "-5rem",
            left: "-5rem",
            transition: {
                type: "spring", 
                bounce: 0.5
            }
        },
        tap: {
            scale: 1.5, 
            transition: {
                type: "spring", 
                bounce: 0.5
            }
        },
    }

    const handleMenuClick = (e) => {
        e.preventDefault();
        setOpen(!open);
    };

    useEffect(() => {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;

        if (open) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.querySelector("body").style.overflow = "hidden";
            if (!isMobile) {
                if (scrollbarWidth > 0) {
                    document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
                } else {
                    document.documentElement.style.setProperty('--scrollbar-width', `16px`); // Default value
                }
                document.querySelector("body").style.paddingRight = `var(--scrollbar-width)`;
            }
        } else {
            document.documentElement.style.removeProperty('--scrollbar-width');
            document.querySelector("body").style.overflow = "";
            document.querySelector("body").style.paddingRight = "";
        }
    }, [open]);

    return (
        <header className="header">
            <motion.div 
                className="header__burger"
                onClick={handleMenuClick}
                variants={burgerVariants}
                animate={open ? "click" : "initial"}
                whileHover={"hover"}
                whileTap={"tap"}
            >
                <motion.a 
                    href="#" 
                    className="header__burger__link"
                    whileHover={{
                        scale: 1.1
                    }}
                >   
                    {open 
                        ? <motion.img 
                            src={menu2} 
                            alt="Bouton du menu" 
                            height={35}
                        />
                        : <motion.img 
                            src={menu} 
                            alt="Bouton du menu" 
                            height={35}
                        />
                    }
                </motion.a>
            </motion.div>
            
            <AppMenu open={open} setOpen={setOpen} />

            <div className="title-container">
                <img 
                    className="header-title" 
                    src={logo2} 
                    alt="Logo de : Où sont passées les artistes femmes"
                />
            </div>
        </header>
    );
}

export default Header;
