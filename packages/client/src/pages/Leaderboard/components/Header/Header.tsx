import React from 'react'
import styles from './styles.module.css';

type Theader = {
  text: string,
}

const Header: React.FC<Theader> = ({ text }) => {
  return (
    <h1 className={styles.text}>{text}</h1>
  );
}

export default Header
