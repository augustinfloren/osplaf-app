import ScrollReveal from "../../ScrollReveal/ScrollReveal";

function Artist(props) {

    const boxVariant = {
        visible: { 
            mixBlendMode: "plus-lighter", 
            opacity: 1, 
            scale: 1, 
            transition: { 
                duration: 0.7, 
                type: "spring",
                bounce: 0.7
            } },
        hidden: { 
            mixBlendMode: "plus-lighter", 
            opacity: 0, 
            scale: 0 },
    }

    return (
        <ScrollReveal
            elementType="div"
            customClass="artist"
            variants={boxVariant}
        >
            <div className={`artist__portrait ${props.artist.id}`}>
                <img src={props.artist.src} alt={`Portrait de ${props.artist.name}`} />
                <div className="orbit orbit1">
                    <div className={`cube ${props.artist.id}`}></div>
                </div>
                <div className="orbit orbit2">
                    <div className={`cube ${props.artist.id}`}></div>
                </div>
            </div>

            <div className="artist__text">
                <h5>{props.artist.name}</h5>
                <p>{props.artist.date}</p>
            </div>
        </ScrollReveal>
    )
}

export default Artist;