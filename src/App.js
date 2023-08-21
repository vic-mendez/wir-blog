import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Blog from './components/pages/Blog';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogPosts from './components/pages/BlogPosts';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/blog' exact element={<Blog />} />
          <Route path='/posts/:specificSlug' exact element={<BlogPosts />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
