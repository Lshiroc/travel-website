import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fill } from './src/Store/basketReducer.js';
import Header from './src/components/header/Header';
import Home from './src/pages/home/Home';
import Events from './src/pages/events/Events';
import Detail from './src/pages/detail/Detail';
import Blog from './src/pages/blog/Blog';
import BlogRead from './src/pages/blogRead/BlogRead';
import Contact from './src/pages/contact/Contact';
import About from './src/pages/about/About.jsx';
import Footer from './src/components/footer/Footer';
// import { Header, MantineProvider } from '@mantine/core';

function App() {

  const [pageNav, setPageNav] = useState('');
  const dispatch = useDispatch();
  // const {basket} = useSelector(state => state.basketReducer);

  useEffect(() => {
    if(localStorage.getItem('basket')) {
      dispatch(fill(localStorage.getItem('basket')));
    } else {
      console.log("no bitches lolll");
    }
  }, []);

  return ( 
    <>
      {/* <MantineProvider withGlobalStyles withNormalizeCSS> */}

      <Header pageNav={pageNav} setPageNav={setPageNav}/>
      <div className="whole">
        <Routes>
          <Route path="/" element={<Home setPageNav={setPageNav} />} />
          <Route path="/events" element={<Events setPageNav={setPageNav}/>} />
          <Route path="/events/tour/:id" element={<Detail setPageNav={setPageNav} />} />
          <Route path="/blog" element={<Blog setPageNav={setPageNav} />} />
          <Route path="/blog/read/:id" element={<BlogRead setPageNav={setPageNav} />} />
          <Route path="/contact" element={<Contact setPageNav={setPageNav} />}/>
          <Route path="/about" element={<About setPageNav={setPageNav} />} />
        </Routes>
      </div>
      <Footer />
      {/* </MantineProvider > */}
    </>
  )
}

export default App;