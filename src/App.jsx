import React from "react";
import Nav from "./components/nav/nav";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Feedback from "./components/feedback/Feedback";
import Services from "./components/services/Services";
import ErrorPage from "./components/error/ErrorPage";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";


const App = () => {
  return (
      <Router>
      <Nav/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/feedback" element={<Feedback/>}/>
        <Route path="*" element={<ErrorPage/>}/>
        </Routes>
        <Footer/>
      </Router>
  )
}

export default App