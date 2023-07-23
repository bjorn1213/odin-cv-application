import { useState } from 'react'
import CVSection from './components/CVSection'
import CVPerson from './components/CVPerson'
import './App.css'
import entryData from './entryData'

function App() {

  return (
    <>
      <CVPerson/>
      <CVSection entryData={entryData.workItems} sectionTitle={"Work experience"} />
      <CVSection entryData={entryData.eduItems}  sectionTitle={"Education"}/>
    </>
  )
}

export default App
