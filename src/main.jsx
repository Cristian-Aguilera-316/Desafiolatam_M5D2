import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Home from './views/Home'
import Favoritos from './views/Favorites'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Desafiolatam_M5D2">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="favoritos" element={<Favoritos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
