import React, { useEffect } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header/header';
import Blogs from './pages/Blogs';
import Footer from './components/footer/footer';
import BlogInfo from './components/BlogInfo/BlogInfo';


function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} id='home'  />
            <Route path="/blogs" element={<Blogs />} id='blogs' />
            <Route path="/blogs/:id" element={<BlogInfo />} id='blogInfo' />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
