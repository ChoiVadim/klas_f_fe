import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LoginPage from './routes/login'
import HomePage from './routes/home'
import MyPage from './routes/myPage'
import LecturesPage from './routes/lectures'
import FAQPage from './routes/faq'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/lectures" element={<LecturesPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
