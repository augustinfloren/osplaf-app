import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import AppMenu from "./AppMenu.jsx";
import "./Header.scss";
import {
    menu,
    menu2,
    logo2
} from '../../../assets/index.js';

function Header() {
    const [open, setOpen] = useState(false);

    const handleMenuClick = (e) => {
        e.preventDefault();
        setOpen(!open);
    };

    useEffect(() => {
        if (open) {
            document.querySelector("body").style.overflow = "hidden";
        } else {
            document.querySelector("body").style.overflow = "";
        }
    }, [open]);

    return (
        <header className="header">
            <motion.div 
                className={`header__burger ${open ? "active" : ""}`}
                onClick={handleMenuClick}
                whileHover={{
                    top: "-5rem",
                    left: "-5rem"
                }}
                whileTap={{
                    scale: 1.5,
                }}
                transition={{
                    type: "spring", bounce: 0.5
                }}
            >
                <motion.a 
                    href="#" 
                    className="header__burger__link"
                    whileHover={{
                        scale: 1.1
                    }}
                >   
                    {open 
                        ? <img src={menu2} alt="Bouton du menu" height={35}/>
                        : <img src={menu} alt="Bouton du menu" height={35}/>
                    }
                </motion.a>
            </motion.div>
            
            <AppMenu open={open} setOpen={setOpen} />

            <img className="header-title" src={logo2} alt="Logo de : Où sont passées les artistes femmes"/>
        </header>
    );
}

export default Header;
