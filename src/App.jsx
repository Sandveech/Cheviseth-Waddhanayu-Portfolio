import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'

import Homepage from "./pages/homepage.jsx";
import NotFound from './pages/404.jsx';
import AdminPage from './pages/adminPage.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>  
    </div>
  )
}

export default App
