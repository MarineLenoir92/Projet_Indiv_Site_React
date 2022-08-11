import React from 'react'
import Header from '../header/Header'
import SideBar from '../sidebar/SideBar'
import Posts from '../posts/Posts'
import "./HomePage.css"


export default function HomePage() {
  return (
    <div className='home'>
      <Header />
      <div className='body'>
      <Posts />
      <SideBar />
      </div>
    </div>
  )
}
