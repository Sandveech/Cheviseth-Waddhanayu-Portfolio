import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'

import Homepage from "./pages/homepage.jsx";
import About from "./pages/about.jsx";
import Projects from './pages/projects.jsx';
import Contact from './pages/contact.jsx';
import NotFound from './pages/404.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>  
    </div>
  )
}

export default App
