import type React from 'react'

type Tinput = React.InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<Tinput> = ({ ...rest }) => {
  return <input {...rest} />
}

export default Input
