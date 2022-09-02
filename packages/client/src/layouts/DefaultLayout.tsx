import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header';

const DefaultLayout: React.FC = () => {
  return (
    <React.Fragment>
      <Header/>
      <main>
        <Outlet />
      </main>
    </React.Fragment>
  )
}

export default DefaultLayout
