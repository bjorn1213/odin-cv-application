import { useState } from 'react'
import './App.css'
import entryData from './entryData'
import CVSection from './components/CVSection'
import CVPerson from './components/CVPerson'
import CVContainer from './components/CVContainer'

function EditButton({editMode, toggleEdit}){
  return (
    <button className="edit-button"
    onClick={toggleEdit}>
      {editMode ? "Confirm" : "Edit"}
    </button>
  )
}

function App() {
  const [editMode, setEditMode] = useState(false);

  function toggleEdit(){
    setEditMode(!editMode);
  }

  return (
    <>
    <div className="app-container">
      <EditButton editMode={editMode} toggleEdit={toggleEdit}/>
      <CVContainer>
        <CVPerson editMode={editMode}/>
        <CVSection editMode={editMode} entryData={entryData.workItems} sectionTitle={"Work experience"} />
        <CVSection editMode={editMode} entryData={entryData.eduItems}  sectionTitle={"Education"}/>
      </CVContainer>
      <EditButton editMode={editMode} toggleEdit={toggleEdit}/>
    </div>
    </>
  )
}

export default App
