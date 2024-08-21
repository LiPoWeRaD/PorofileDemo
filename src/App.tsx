import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header/header';
import Blogs from './pages/Blogs';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
