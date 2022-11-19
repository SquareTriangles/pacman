import type React from 'react'
import Drawer, { DrawerProps } from '@mui/material/Drawer'

type TcCustomDrawer = DrawerProps & {
  children: JSX.Element | JSX.Element[]
}

const CustomDrawer: React.FC<TcCustomDrawer> = ({ children, ...rest }) => {
  return <Drawer {...rest}>{children}</Drawer>
}

export default CustomDrawer
