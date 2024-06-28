import React, { useState } from 'react';
import './App.css'; // Import CSS file
import Navbar from './Navbar';
import Chat from './pages/Chat';
import About from './pages/About_myself';
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
         <Routes>
         <Route path="/" element={<Chat />} />
         <Route path="/Attacking_and_defense_of_network_security" element={<Chat />} />
          <Route path="/Attacking_and_defense_of_network_security/Chat" element={<Chat />} />
          <Route path="Attacking_and_defense_of_network_security/about" element={<About />} />
        </Routes>
      </div>
    </>
  )
    
}

export default App;
