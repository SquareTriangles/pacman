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
//import startServiceWorker from './serviceWorker';
import { getProfile } from './redux/user/user.actions'
import { useAppDispatch } from './hooks'


const App: React.FC = () => {

  const dispatch = useAppDispatch();

  const isCookeisValid = () => {
    dispatch(getProfile());
  }

  isCookeisValid();

  React.useEffect(() => {
    (async function(){
      const startServiceWorker = await import('./serviceWorker')
      startServiceWorker;
    })()

  }, [])

  return (
    <Routes>
      <Route path={routeList.MAIN_ROUTE} element={<DefaultLayout />}>
        <Route index element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route path={routeList.SIGNIN_ROUTE} element={<Signin />} />
        <Route path={routeList.SIGNUP_ROUTE} element={<Signup />} />
        <Route path={routeList.ABOUT_ROUTE} element={<Landing />} />
        <Route path={routeList.PROFILE_ROUTE} element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />
        <Route path={routeList.GAME_ROUTE} element={
          <ProtectedRoute>
            <GameApp />
          </ProtectedRoute>
        } />
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
