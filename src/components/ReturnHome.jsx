import { Link } from 'react-router-dom';
import arrow from "../assets/icons/osplaf-arrow3.png";
import "./ReturnHome.scss";

function ReturnHome() {
    return (
        <Link 
            to="/"
            className="return"
        >
            <img 
                src={arrow} 
                alt="flêche de retour à l'accueil" 
            />  
        </Link>
    )
}

export default ReturnHome;