import type React from 'react'

type Tform = React.HtmlHTMLAttributes<HTMLFormElement>

const Form: React.FC<Tform> = ({ children, ...rest }) => {
  return <form {...rest}>{children}</form>
}

export default Form
