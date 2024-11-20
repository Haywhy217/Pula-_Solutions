
import React from 'react'
import styles from './Button.module.css';

const Button = ({text, onClick}) => {
  return (
     
      <button className={styles.btn_container}onClick={onClick}>{text}</button>
    
  )
}

export default Button