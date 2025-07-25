import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
    
      <Routes>
        <Route path="about" element={<div>About Page</div>} />
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="/services" element={<div>Services Page</div>} />
        <Route path="/blog" element={<div>Blog Page</div>} />
      </Routes>
    </Router>
  )
}

export default App
