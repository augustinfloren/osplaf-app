import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { hexa } from '../../../../assets/index';

const duration = 4;

function Hexa() {



    return (
        <div className="hexa-container">
            {hexa.map((shape, i) => (
                <motion.img
                    key={shape.id}
                    className={`hexa ${shape.id}`}
                    src={shape.src}
                    alt={shape.alt}
                    animate={{opacity: [0, 1, 1, 0]}}
                    transition={{
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 4,
                    }}
                />
            ))}
        </div>
    );
}

export default Hexa;