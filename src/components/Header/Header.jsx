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

            <img className="header-title" src={logo} alt="Logo de : Où sont passées les artistes femmes" width={600}/>

            <div className="header-intro">
                <div className="header-intro__text">
                    <h1><strong>Menez l'enquête</strong> pour retrouver quelle femme a été effacée de l'histoire de l'art !</h1>
                    <a className="buy-button" href="#">Acheter le jeu</a>
                </div>
                
                <img className="header-intro__img" src={box} alt="Boîte du jeu" />
            </div>

        </header>
    );
}

export default Header;