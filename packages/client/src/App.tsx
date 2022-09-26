import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/Default'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import NotFound from './pages/NotFound'
import Landing from './pages/Landing'
import Forum from './pages/Forum'
import GameApp from './pages/Game'
import * as routeList from './utils/Routes';
import './App.css'
import 'normalize.css'
import startServiceWorker from './serviceWorker';


const App: React.FC = () => {

  React.useEffect(() => {
    startServiceWorker();
  }, [])
  return (
    <Routes>
      <Route path={routeList.MAIN_ROUTE} element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path={routeList.PROFILE_ROUTE} element={<Profile />} />
        <Route path={routeList.SIGNIN_ROUTE} element={<Signin />} />
        <Route path={routeList.SIGNUP_ROUTE} element={<Signup />} />
        <Route path={routeList.ABOUT_ROUTE} element={<Landing />} />
        <Route path={routeList.GAME_ROUTE} element={<GameApp />} />
        <Route
          path={routeList.FORUM_ROUTE}
          element={
            <ProtectedRoute>
              <Forum />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
