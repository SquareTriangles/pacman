import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/Default'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import NotFound from './pages/NotFound'
import Leaderboard from './pages/Leaderboard'
import './App.css'
import 'normalize.css'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/leaderboard"
          element={
            <ProtectedRoute>
              <Leaderboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
