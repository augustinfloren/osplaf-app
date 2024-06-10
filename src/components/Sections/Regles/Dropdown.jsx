import { useState, useRef, useEffect } from 'react';
import './Regles.scss';
import dropdownIcon from '../../../assets/icons/osplaf-dropdown.png';

function Dropdown(rule) {
    const content = rule.content;
    const [open, setOpen] = useState(false);
    const [showSteps, setShowSteps] = useState(false);
    const contentRef = useRef(null);

    const openPhaseContainer = (event) => {
        if (event.target === event.currentTarget) {
            setOpen(!open);
        }
    }

    const openChildPhaseContainer = (event) => {
        if (event.target === event.currentTarget) {
            setOpen(!open);
            event.stopPropagation();
        }
    }

    useEffect(() => {
        if (open) {
            const timeoutId = setTimeout(() => {
                setShowSteps(true);
            }, 100);

            return () => clearTimeout(timeoutId);
        } else {
            setShowSteps(false);
        }
    }, [open]);

    return (
        <div className={`regles__content__phase ${open ? "open" : ""}`}
            key={`regles__content__${content.name}`}
            onClick={openPhaseContainer}
            ref={contentRef} 
        >

            <div className="regles__content__phase-title"  onClick={openChildPhaseContainer}>
                <h3 onClick={openChildPhaseContainer} >{content.name}</h3>

                <img className={`regles__content__phase-title__dropdown ${open ? "open" : ""}`} src={dropdownIcon} alt="Menu déroulant" onClick={openChildPhaseContainer} ref={contentRef} />
            </div>

            {open &&
                <div className={`regles__content__phase-steps ${showSteps ? "show" : ""}`} > 
                    {(Array.isArray(content.description)
                        ? content.description.map((step, index) => ( <div className='description-list' key={`${step}-${index}`}><div className='number'><h3>{index + 1}</h3></div><p>{step}</p></div>))
                        : <p className='description-single'>{content.description}</p>
                    )}
                </div>
            }
            
        </div>
    )
}

export default Dropdown;