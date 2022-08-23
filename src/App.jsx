import Home from './Pages/Home'
import Create from './Pages/Create'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import React from "react";


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' exact element={ <Home /> } />
        <Route path='/create' exact element={ <Create /> } />
      </Routes>
    </div>
  )
}

export default App
