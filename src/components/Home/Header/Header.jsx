import { useState, useEffect } from "react";
import AppMenu from "./AppMenu.jsx";
import "./Header.scss";
import {
    menu,
    menu2,
    account,
    account2,
    basket,
    basket2,
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
            <nav className='header-nav'>
                <a href="#" 
                    className="header-nav__menu-link nav"
                    onClick={handleMenuClick}
                >
                    {open 
                        ? <img src={menu2} alt="Bouton du menu" height={35}/>
                        : <img src={menu} alt="Bouton du menu" height={35}/>
                    }
                </a>
                <a href="#" className="header-nav__basket-link nav">
                    {open 
                        ? <img src={basket2} alt="Bouton du panier" height={40}/>
                        : <img src={basket} alt="Bouton du panier" height={40}/>
                    }
                </a>
                <a href="#" className="header-nav__account-link nav">
                    {open 
                        ? <img src={account2} alt="Bouton du compte" height={40}/>
                        : <img src={account} alt="Bouton du compte" height={40}/>
                    }
                </a>
            </nav>
            
            <AppMenu open={open} setOpen={setOpen} />

            <img className="header-title" src={logo2} alt="Logo de : Où sont passées les artistes femmes"/>
        </header>
    );
}

export default Header;