import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SearchResult from './components/SearchResult'
import Home from './components/Home'
import { AppContext } from './utils/ContextApi'


const App = () => {
  return (
    <AppContext>
      <BrowserRouter>

      <Routes>

        <Route path='/' exact element={<Home/>} />

        <Route path='/:query/:startIndex'  element={<SearchResult/>} />

      </Routes>

      </BrowserRouter>
    </AppContext>
    
  )
}

export default App
