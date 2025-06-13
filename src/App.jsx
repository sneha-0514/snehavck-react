import React from "react";
import {Route , BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import CoursesPage from "./Pages/CoursesPage";
import ContactPage from "./Pages/ContactPage";
import AddmisionPage from "./Pages/AddmisionPage";
import ChatbotComponent from "./components/Chatbot/ChatbotComponents";


const App = () => {
    return(
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/aboutpage" element={<AboutPage/>}/>
          <Route path="/coursespage" element={< CoursesPage/>}/>
          <Route path="/contactpage" element={< ContactPage/>}/>
          <Route path="/addmisionpage" element={< AddmisionPage/>}/>
        </Routes>
        <ChatbotComponent/>
      </Router>
    )
}

export default App