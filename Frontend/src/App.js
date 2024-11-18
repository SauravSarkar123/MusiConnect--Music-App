import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landingpage'
import Login from './pages/Login'
import { MusicProvider } from './MusicContext'

function App() {



  return (
    <MusicProvider>
      <Router>
        <div className='App'>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </Router>
    </MusicProvider>

  )
}

export default App