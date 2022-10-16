import React from "react"
import { useAppSelector } from '../hooks'

type TwithAuthProps = {
  [key: string]: any,
}

function withAuth<P extends TwithAuthProps>(Component: React.FC<P>) {
  const showingComponent:React.FC<P> = ({...props}) => {
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