import React from 'react'
import ReactDOM from 'react-dom/client'
import { HomePage } from './pages/Home'
import { MoviesPage } from './pages/Movies'
import { SearchPage } from './pages/Search'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./assets/css/Global.scss"
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} />
        <Route path="/" element={<HomePage />} />
        <Route path="movie/:id" element={<MoviesPage />} />
        <Route path="search" element={<SearchPage />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
