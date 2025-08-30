import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer() {
    return (
        <footer className='footer'>
            <ul>
                <Link to="/mentions-legales">
                    <li>• Mentions légales</li>
                </Link>
                
                <Link to="/cgv">
                    <li>• CGV</li>
                </Link>
            </ul>

            <p>© Où sont passées les artistes femmes < br/> 2025</p>
        </footer>
    )
}

export default Footer;