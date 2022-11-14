import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import KanjiCard from './components/KanjiCard'

function App() {

  return (
    <div className="App">
      <Header />
      <KanjiCard />
    </div>
  )
}

export default App
