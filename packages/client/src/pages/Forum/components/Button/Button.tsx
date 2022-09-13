import React from 'react'
import styles from './styles.module.css'

type Tbutton = React.ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<Tbutton> = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>
}

type TforumLargeButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string
  onClick?: () => void
  className?: string
}

const ForumLargeButton: React.FC<TforumLargeButton> = ({
  text,
  className = '',
  ...rest
}) => {
  return (
    <Button
      className={`${styles.button} ${styles.button__type_forum} ${className}`}
      {...rest}>
      {text}
    </Button>
  )
}

export { Button, ForumLargeButton }
