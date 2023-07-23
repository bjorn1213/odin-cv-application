import { useState } from 'react';
import '../styles/CVSection.css'
import CVEntry from './CVEntry'


function CVSection({entryData, sectionTitle}) {
    const [showSection, setShowSection] = useState(true);

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
                {entryData.map((entry) => showSection ? <CVEntry key={entry.id} entry={entry}/> : null)}
            </div>
        </div>
        </>
    )
}


export default CVSection