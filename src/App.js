import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contacts from './components/Contacts';
import Post from './components/Post';
import FullPost from './components/FullPost';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<Home />} /> {/* Use element prop */}
          <Route path="/contact" element={<Contacts />} />
          <Route path="/post" element={<Post />} />
          <Route path="/:full_post" element={<FullPost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
