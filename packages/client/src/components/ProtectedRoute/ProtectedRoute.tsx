import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../../hooks'
import { ProtectedRouteProps } from './types'

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuth } = useAppSelector(state => state.user)

  if (!isAuth) {
    return <Navigate to="/signin" />
  }

  return children
}

export default ProtectedRoute
