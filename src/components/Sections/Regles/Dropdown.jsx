import { useState, useRef } from 'react';
import './Regles.scss';
import dropdownIcon from '../../../assets/icons/osplaf-dropdown.png';

function Dropdown(rule) {
    const content = rule.content;
    const [open, setOpen] = useState(false);
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

    return (
        <div className='regles__content__phase'
            key={`regles__content__${content.name}`}
            onClick={openPhaseContainer}
            ref={contentRef} 
            style={open ? { height: contentRef.current.scrollHeight + "px" } : { height: "max(8vw, 6rem)" }}
        >

            <div className="regles__content__phase-title"  onClick={openChildPhaseContainer}>
                <h3 onClick={openChildPhaseContainer} >{content.name}</h3>

                <img className={`regles__content__phase-title__dropdown ${open ? "open" : ""}`} src={dropdownIcon} alt="Menu déroulant" onClick={openChildPhaseContainer} ref={contentRef} />
            </div>

            <div className={`regles__content__phase-steps ${open ? "show" : ""}`} > 
                {(Array.isArray(content.description)
                    ? content.description.map((step, index) => ( <div className='description-list' key={`${step}-${index}`}><div className='number'><h3>{index + 1}</h3></div><p>{step}</p></div>))
                    : <p className='description-single'>{content.description}</p>
                )}
            </div>
            
        </div>
    )
}

export default Dropdown;