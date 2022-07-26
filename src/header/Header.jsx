import React from 'react'
import "./Header.css"
import imgheader from "./imgheader.jpg"


export default function Header() {
  return (
    <div className='header'>
      <div className='headertitle'>
        <span className='headersmalltitle'>Art of Slow Travel</span>
        <span className='headerlargetitle'>The TravelTeller</span>
      </div>
    <img className='headerimage' src={imgheader} alt="header page accueil"></img>
    </div>
  )
}
