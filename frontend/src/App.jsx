import { useState } from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './routes/Home.jsx';

function App() {

  return (
    <div className="min-w-full"> 
      <Router>
          <Routes>
            <Route path='/' element={<Layout><Home /></Layout>} />
          </Routes>
      </Router>
    </div>
  )
}

export default App
