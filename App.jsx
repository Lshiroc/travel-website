import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './src/components/header/Header';
import Home from './src/pages/home/Home';
import Blog from './src/pages/blog/Blog';
import Footer from './src/components/footer/Footer';
// import { Header, MantineProvider } from '@mantine/core';

function App() {
  return (
    <>
      {/* <MantineProvider withGlobalStyles withNormalizeCSS> */}

      <Header />
      <div className="whole">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
      <Footer />
      {/* </MantineProvider > */}
    </>
  )
}

export default App;