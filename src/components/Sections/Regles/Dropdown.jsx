import { useState } from 'react';
import './Regles.scss';
import dropdownIcon from '../../../assets/icons/osplaf-dropdown.png';

function Dropdown(rule) {
    const content = rule.content;
    const [isOpen, setScrolldown] = useState(false);

    function toggleDropdown() {
        setScrolldown(!isOpen);
    }

    return (
        <div className='regles__content' key={`regles__content__${content.name}`}>
            <h3>{content.name}</h3>

            <div className={`regles__content__dropdown ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
                <img src={dropdownIcon} alt="Menu déroulant" />
            </div>

            <div className={`regles__content__steps ${isOpen ? 'open' : ''}`}>
                {(Array.isArray(content.description)
                    ? content.description.map((step, index) => ( <div className='description-list' key={`${step}-${index}`}><h3>{index + 1}</h3><p>{step}</p></div>))
                    : <p className='description-single'>{content.description}</p>
                )}
            </div>
        </div>
    )
}

export default Dropdown;