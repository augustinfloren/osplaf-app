import './Header.scss'
import menu from '../../assets/osplaf-burger.png'
import account from '../../assets/osplaf-account.png'
import basket from '../../assets/osplaf-basket.png'
import logo from '../../assets/osplaf-logo1.png'
import box from '../../assets/osplaf-box.png'

function Header() {
    return (
        <header className="header">
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

            <img src={logo} alt="Logo de : Où sont passées les artistes femmes" />

            <h1>Menez l'enquête pour retrouver quelle femme a été effacée de l'histoire de l'art !</h1>
            <a href="#">Acheter le jeu</a>
            <img src={box} alt="Boîte du jeu" />
        </header>
    );
}

export default Header;