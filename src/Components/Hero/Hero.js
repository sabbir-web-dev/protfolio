import { FaLinkedinIn } from "react-icons/fa"; 
import { AiFillGithub } from "react-icons/ai"; 
import React from 'react'
import "./Hero.css"

function Hero() {
  return (
    <section id="home">
      <div className="home-wrap padding ">
        <div className="col-50">
          <h4>Hi There!</h4>
          <h2>I'M <span className="heading">SABBIR HOSSEN</span></h2>
          <h4>Fontent Developaer</h4>
          <div className="link-wrap">
            <AiFillGithub className="link-icon" />
            <FaLinkedinIn className="link-icon" />
          </div>
        </div>
        <div className="col-50 center">
          <div className="home-img">
            <img src="https://cdn.sanity.io/images/ordgikwe/production/a830c5182852e35bcd0dc07b90122f07ecd15f48-700x525.gif?w=700&h=525&auto=format" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
