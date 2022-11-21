import type React from 'react'

export interface ITabPanelProps {
  children: JSX.Element
  value: number
  index: number
}

const TabPanel: React.FC<ITabPanelProps> = ({
  children,
  value,
  index,
}) => {
  return <>{index === value && children}</>
}

export default TabPanel
