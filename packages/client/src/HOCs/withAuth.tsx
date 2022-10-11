import React from "react"
import { useAppSelector } from '../hooks'

function withAuth(Component: React.FC) {
  const showingComponent:React.FC = ({...props}) => {
    const { isAuth } = useAppSelector(state => state.user)
    if (!isAuth) {
      return <React.Fragment></React.Fragment>
    }
    return(
      <Component {...props} />
    )
  }
  return showingComponent
}

export default withAuth