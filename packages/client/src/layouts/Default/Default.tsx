import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'

const Default: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Outlet />
      </main>
    </React.Fragment>
  )
}

export default Default
