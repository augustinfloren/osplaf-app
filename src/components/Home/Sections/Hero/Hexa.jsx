import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { hexa } from '../../../../assets/index';

const duration = 2;

function Hexa() {
    const [cycle, setCycle] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCycle(cycle => cycle + 1);
      }, duration * 1000); 
  
      return () => clearInterval(interval);
    }, []);
  
    const containerVariants = {
      hidden: { 
        opacity: 0,
      },
      show: {
        opacity: [1,1,0],
        transition: {
          duration: 3,
          staggerChildren: 0.3,
        },
      }
    };
  
    const childrenVariants = {
      hidden: { 
        opacity: 0,
      },
      show: { 
        opacity: 1,
      }
    };
  
    return (
      <motion.div 
        key={cycle} // Ajoute une clé pour réinitialiser l'animation à chaque cycle
        className="hexa-container"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {hexa.map((shape, i) => (
          <motion.img
            key={shape.id}
            className={`hexa ${shape.id}`}
            src={shape.src}
            alt={shape.alt}
            variants={childrenVariants}
          />
        ))}
      </motion.div>
    );
  }
  
  export default Hexa;