import './Footer.scss';

function Footer() {
    return (
        <footer className='footer'>
            <ul>
                <a href="/mentions-legales">
                    <li>• Mentions légales</li>
                </a>
                
                <a href="/cgv">
                    <li>• CGV</li>
                </a>
            </ul>

            <p>© Où sont passées les artistes femmes < br/> 2024</p>
        </footer>
    )
}

export default Footer;