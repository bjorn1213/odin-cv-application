import { useState } from "react";
import "../styles/CVSection.css";
import CVEntry from "./CVEntry";
import { compareDesc } from "date-fns";

function CVSection({ entryData, sectionTitle }) {
  const [showSection, setShowSection] = useState(true);

  function toggleSection() {
    setShowSection(!showSection);
  }

  function entrySorter(entryA, entryB){
    // prep start and end dates, replace if necessary
    const startA = entryA.startDate instanceof  Date ? entryA.startDate : new Date(1900, 0);
    const startB = entryB.startDate instanceof  Date ? entryB.startDate : new Date(1900, 0);
    
    const endA = entryA.endDate instanceof  Date ? entryA.endDate : new Date(2100, 0);
    const endB = entryB.endDate instanceof  Date ? entryB.endDate : new Date(2100, 0);
    
    // sort by end date, start date in case of tie
    return compareDesc(endA, endB) || compareDesc(startA, startB)

  }

  return (
    <>
      <div className="cv-section-container">
        <div className="section-head">
          <button className="show-hide-section" onClick={toggleSection}>
            {showSection ? "X" : "O"}
          </button>
          <h2>{sectionTitle}</h2>
        </div>
        <div className="entry-container">
          {entryData.sort(entrySorter).map((entry) =>
              showSection ? <CVEntry key={entry.id} entry={entry} /> : null
            )}
        </div>
      </div>
    </>
  );
}

export default CVSection;
