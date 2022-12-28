import React from 'react'
import styles from './Navbar.module.css'

const TextError = (props) => {
  return (
    <div style={{color:"red"}}>
         {
            props.children
         }
    </div>
  )
}

export default TextError