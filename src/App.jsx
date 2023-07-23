import { useState } from 'react'
import CVSection from './components/CVSection'
import './App.css'
import entryData from './entryData'

function App() {

  return (
    <>
      <CVSection entryData={entryData.eduItems}  sectionTitle={"Education"}/>
      <CVSection entryData={entryData.workItems} sectionTitle={"Work experience"} />
    </>
  )
}

export default App
