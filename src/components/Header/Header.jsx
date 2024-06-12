import "./Header.scss"
import {
    menu,
    account,
    basket,
    logo,
    logo2
}   from '../../assets/index.js'

function Header() {
    return (
        <header className="header animate__animated animate__fadeIn">
            <nav className='header-nav'>
                <a href="#" className="header-nav__menu-link">
                    <img src={menu} alt="menu" height={35}/>
                </a>
                <a href="#" className="header-nav__basket-link">
                    <img src={basket} alt="panier" height={40}/>
                </a>
                <a href="#" className="header-nav__account-link">
                    <img src={account} alt="compte" height={40}/>
                </a>
            </nav>

            <img className="header-title" src={logo2} alt="Logo de : Où sont passées les artistes femmes"/>
        </header>
    );
}

export default Header;