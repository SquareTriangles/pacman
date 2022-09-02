import React from 'react'
import { Navigate } from 'react-router-dom'
import { ProtectedRouteProps } from './types'

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isAuth = true
  if (!isAuth) {
    return <Navigate to="/" />
  }
  return children
}

export default ProtectedRoute