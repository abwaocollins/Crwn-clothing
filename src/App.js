import React from 'react'
import HomePage from './pages/homepage/homepage.component'
import './App.css'
import { Route, Routes } from 'react-router-dom'

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/hats" element={<HatsPage />} />
      </Routes>
    </div>
  )
}

export default App
