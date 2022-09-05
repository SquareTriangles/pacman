import React from 'react'

type TerrorBoundaryProps = {
  children: JSX.Element | JSX.Element[]
  errorComponent: JSX.Element | JSX.Element[]
}

type TerrorBoundaryState = {
  hasError: boolean
}

const myLogger = (error: Error, errorInfo: React.ErrorInfo) => {
  console.log('error: ' + error)
  console.log('errorInfo: ' + JSON.stringify(errorInfo))
  console.log('componentStack: ' + errorInfo.componentStack)
}

class ErrorBoundary extends React.Component<
  TerrorBoundaryProps,
  TerrorBoundaryState
> {
  constructor(props: TerrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError(): TerrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    myLogger(error, errorInfo)
  }
  render() {
    if (this.state.hasError) {
      return this.props.errorComponent
    }
    return this.props.children
  }
}

export default ErrorBoundary
