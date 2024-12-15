import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LoginPage from './routes/login'
import HomePage from './routes/home'
import TodosPage from './routes/todos'
import ChatPage from './routes/chat'
import SettingsPage from './routes/settings'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
