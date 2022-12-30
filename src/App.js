import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Footer from './components/Footer';


function App() {
  return (
    <div>
    
     <Navbar />
     <Routes>
        <Route exact path="/" element={<Home />} ></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/services" element={<Services />} ></Route>
        <Route exact path="/contact" element={<Contact />} ></Route>
      </Routes> 

      <Footer />
    </div>
  );
}

export default App;
