import { useState } from "react";
import "../styles/CVSection.css";
import CVEntry from "./CVEntry";
import { compareDesc } from "date-fns";

function CVSection({ entryData, sectionTitle, editMode}) {
  const entryObject = {};

  for (let entry of entryData){
    entryObject[entry.id] = entry;
  }

  const [showSection, setShowSection] = useState(true);
  const [title, setTitle] = useState(sectionTitle);
  const [entries, setEntries] = useState(entryObject);

  function changeStartDate(entryID){
    return function(newStartDate){
      console.log(entryID);
      console.log(newStartDate);

      const entriesLoc = {
        ...entries, 
        [entryID]: {...entries[entryID],
                    "startDate": newStartDate}
      }
      setEntries(entriesLoc);
    }
  }
  
  function changeEndDate(entryID){
    return function(newEndDate){
      const entriesLoc = {
        ...entries, 
        [entryID]: {...entries[entryID],
                    "endDate": newEndDate}
      }
      setEntries(entriesLoc);
    }
  }

  function toggleSection() {
    setShowSection(!showSection);
  }

  function entrySorter(firstEntry, secondEntry){
    const entryA = entries[firstEntry.id];
    const entryB = entries[secondEntry.id];

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
          {editMode ? <input value={title} onChange={(e) => setTitle(e.target.value)}/> : <h2>{title}</h2>}
        </div>
        <div className="entry-container">
          {entryData.sort(entrySorter).map((entry) =>
              showSection ? <CVEntry 
                                key={entry.id} 
                                entry={entries[entry.id]} 
                                editMode={editMode}
                                setStartDate={changeStartDate(entry.id)}
                                setEndDate={changeEndDate(entry.id)}
                            /> : null
            )}
        </div>
      </div>
    </>
  );
}

export default CVSection;
