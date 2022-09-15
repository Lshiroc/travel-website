import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './src/pages/home/Home';
import Footer from './src/components/footer/Footer';
// import { Header, MantineProvider } from '@mantine/core';

function App() {
  return (
    <>
      {/* <MantineProvider withGlobalStyles withNormalizeCSS> */}
        
        <div className="whole">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      {/* </MantineProvider > */}
    </>
  )
}

export default App;