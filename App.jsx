import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './src/pages/home/Home';

function App() {
  return (
    <>
      <div className="whole">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  )
}

export default App;