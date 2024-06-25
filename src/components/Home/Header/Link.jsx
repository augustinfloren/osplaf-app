import { motion } from "framer-motion";
import { useState, useRef } from "react";

function Link({ link, index, activeAnchor, setActiveAnchor, customStyle }) {
    function handleActiveAnchor(link) {
        setActiveAnchor(link)
    }

    return (
        <motion.a
            href={link.href}
            className={`${activeAnchor === link.href ? "active-link" : ""}`}
            style={customStyle}
            whileHover={{
                scale: 0.8, 
                rotate: index % 2 === 0 ? -5 : 5,
                transition: {
                    rotate: {
                        duration: 0.3,
                        type: "spring",
                        bounce: 0.3
                    }
                }
            }}
            whileTap={{ 
                scale: [0.9, 1.2, 0.9], 
            }}
            onClick={() => handleActiveAnchor(link.href)}
        >
            {link.name}
        </motion.a>
    );
}

export default Link;
