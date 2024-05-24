import './Header.scss'
import menu from '../../assets/osplaf-burger.png'
import account from '../../assets/osplaf-account.png'
import basket from '../../assets/osplaf-basket.png'
import logo from '../../assets/osplaf-logo1.png'

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
        </header>
    );
}

export default Header;