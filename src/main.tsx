import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

// import your two pages
import Landing from './App'
import Docs from './Docs'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/docs" element={<Docs />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
