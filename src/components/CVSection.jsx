import { useState } from 'react';
import '../styles/CVSection.css'
import CVEntry from './CVEntry'


function CVSection() {
    const dummy = [0, 3, 4];
    const [showSection, setShowSection] = useState(true);
    const sectionTitle = "Section title"

    function toggleSection() {
        setShowSection(!showSection);
    }

    return (
        <>
        <div className="cv-section-container">
            <div className="section-head">
                <button 
                    className="show-hide-section"
                    onClick={toggleSection}>
                    {showSection ? "X" : "O"}
                </button>
                <h2>{sectionTitle}</h2>
            </div>
            <div className="entry-container">
                {dummy.map((_, i) => showSection ? <CVEntry key={i}/> : null)}
            </div>
        </div>
        </>
    )
}


export default CVSection