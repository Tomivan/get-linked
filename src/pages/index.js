import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./register";
import Contact from "./contact";
import Home from "./home";

const Pages =  () => {
    return(
        <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    </Router>
    )
}

export default Pages;