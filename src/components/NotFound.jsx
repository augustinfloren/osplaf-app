import ReturnHome from "../components/ReturnHome";
import "./NotFound.scss";
import LoadingContext from "../components/Home/Loading/LoadingContext";
import { useContext } from "react";

function NotFound() {
    const { setHasLoaded } = useContext(LoadingContext);
    setHasLoaded(true);
    return (
        <div className="notfound-container">
                <div className="notfound">
                    <h2>404 - Page non trouvée</h2>
                    <p>Oups ! Cette page n'existe pas.</p>
                <div>
                    <ReturnHome />
                </div>
            </div>
        </div>
    )
}

export default NotFound;