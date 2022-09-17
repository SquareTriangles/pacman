import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../../hooks'
import { ProtectedRouteProps } from './types'
import * as routeList from '../../utils/Routes';

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuth } = useAppSelector(state => state.user)

  if (!isAuth) {
    return <Navigate to={routeList.SIGNIN_ROUTE} />
  }

  return children
}

export default ProtectedRoute
