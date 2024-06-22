import { motion } from "framer-motion";

function Link({ link, index }) {
    return (
        <motion.a
            href={link.href}
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
        >
            {link.name}
        </motion.a>
    );
}

export default Link;
