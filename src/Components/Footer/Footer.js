import { AiFillGithub } from "react-icons/ai"; 
import { AiFillLinkedin } from "react-icons/ai"; 
import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='footer'>
      <ul>
        <li><AiFillGithub /></li>
        <li><AiFillLinkedin /></li>
      </ul>
      <p>Copyright &copy; Sabbir Hosen. All rights reserved as of {new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer
