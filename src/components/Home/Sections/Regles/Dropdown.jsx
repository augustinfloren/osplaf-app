import { useState, useRef, useEffect } from 'react';
import './Regles.scss';
import dropdownIcon from '../../../../assets/icons/osplaf-dropdown.png';
import { delay, motion, transform, useAnimation } from "framer-motion";

function Dropdown(rule) {
    const control = useAnimation();
    const content = rule.content;
    const [open, setOpen] = useState(false);
    const contentRef = useRef(null);

    const openPhaseContainer = (event) => {
        if (event.target === event.currentTarget) {
            setOpen(!open);
            event.stopPropagation();
        }
    }

    useEffect(() => {
        if (open) {
            control.start("show");
        } else {
            control.start("hidden");
        }
    }, [control, open]);

    const stepsContainerVariants = {
        show: {
            opacity: 1,
            display: "flex",
            transition: {
                duration: 0.3,
                staggerChildren: 0.2,
            },
        },
        hidden: {
            opacity: 0,
            transition: {
                delay: 0.1,
                duration: 0.3,
                staggerChildren: 0.1,
                staggerDirection: -1
            },
            transitionEnd: {
                display: "none"
            }
        }
    }

    const stepsVariants = {
        show: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
        },
        hidden: {
            scale: 0.5,
            opacity: 0,
            transition: {
                ease: "easeIn"
            }
        }
    }

    function activateHover() {
        if (open) {
            return ({
                scale: 1,
                marginTop: "0.5rem",
                marginBottom: "0.5rem",
            })
        } else {
            return ({
                scale: 1.02,
                marginTop: "0.5rem",
                marginBottom: "0.5rem",
            })
        }
    }

    return (
        <motion.div 
            className={`regles__content__phase`}
            key={`regles__content__${content.name}`}
            onClick={openPhaseContainer}
            ref={contentRef}
            whileHover={activateHover}
        >

            <div 
                className="regles__content__phase-title" 
                onClick={openPhaseContainer}
            >
                <h3 onClick={openPhaseContainer}>{content.name}</h3>

                <img 
                    className={`regles__content__phase-title__dropdown ${open ? "open" : ""}`} 
                    src={dropdownIcon} alt="Menu déroulant" 
                    onClick={openPhaseContainer} 
                    ref={contentRef} 

                />
            </div>

            <motion.div 
                className={`regles__content__phase-steps`} 
                variants={stepsContainerVariants}
                animate={control}
            > 
                {(Array.isArray(content.description)
                    ? content.description.map((step, index) => ( <motion.div className='description-list' key={`${step}-${index}`} variants={stepsVariants}><div className='number'><h3>{index + 1}</h3></div><p>{step}</p></motion.div>))
                    : <p className='description-single'>{content.description}</p>
                )}
            </motion.div>
            
        </motion.div>
    )
}

export default Dropdown;