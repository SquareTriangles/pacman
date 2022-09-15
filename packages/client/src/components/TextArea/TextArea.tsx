import React from 'react'

type TtextArea = React.HtmlHTMLAttributes<HTMLTextAreaElement> & {
  name: string
  value: string
}

const TextArea: React.FC<TtextArea> = ({ name, children, ...rest }) => {
  return (
    <textarea name={name} {...rest}>
      {children}
    </textarea>
  )
}

export default TextArea
