import ScrollReveal from "../../ScrollReveal/ScrollReveal";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Artists(props) {
    const control = useAnimation();
    const [ref, inView] = useInView();

    const container = {
        visible: { 
            transition: { 
                delayChildren: 0.3,
                staggerChildren: 0.2,
            } 
        },
    }

    const item = {
        hidden: { 
            // y: 20, 
            opacity: 0,
            scale: 0,
            mixBlendMode: "plus-lighter",
        },
        visible: {
            // y: 0,
            opacity: 1,
            scale: 1,
            mixBlendMode: "plus-lighter",
            transition: {
                duration: 0.5, 
                type: "spring",
                bounce: 0.25,
            }
        } 
    }

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <motion.div
            className="artists__container"
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {props.artists.map((artist) => (
                <motion.div
                    key={artist.id}
                    className="artist"
                    variants={item}
                    animate={control}
                >
                    <div className={`artist__portrait ${artist.id}`}>
                        <img src={artist.src} alt={`Portrait de ${artist.name}`} />
                        <div className="orbit orbit1">
                            <div className={`cube ${artist.id}`}></div>
                        </div>
                        <div className="orbit orbit2">
                            <div className={`cube ${artist.id}`}></div>
                        </div>
                    </div>

                    <div className="artist__text">
                        <h5>{artist.name}</h5>
                        <p>{artist.date}</p>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    )
}

export default Artists;