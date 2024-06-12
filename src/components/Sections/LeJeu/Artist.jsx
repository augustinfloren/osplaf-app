import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Artist(props) {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    const boxVariant = {
        visible: { mixBlendMode: "plus-lighter", opacity: 1, scale: 1, Transition: { duration: 0.5 } },
        hidden: { mixBlendMode: "plus-lighter", opacity: 0, scale: 0 },
    }

    return (
        <motion.div 
            ref={ref}
            className="artist"
            variants={boxVariant}
            initial="hidden"
            animate={control}
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
        </motion.div>
    )
}

export default Artist;