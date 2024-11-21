import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LoginPage from './routes/login'
import HomePage from './routes/home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
