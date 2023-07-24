import React from 'react'
import phoneImg from '../assets/images/image-mockups.png'
import phoneBgDesktop from '../assets/images/bg-intro-desktop.svg'

const Header = () => {
  return (
    <header className='hero-main'>
      <div className="content-div">
        <div className="main-content">
            <h1>Next generation digital banking!!!</h1>
            <p>Take your financial life online. Your Easybank
account will be a one-stop-shop for spending,
saving, budgeting, investing, and much more.</p>
            <button className="request-btn">Request Invite</button>
        </div>
      </div>
      <div className="content-img-div">
        <img className='phone-img' src={phoneImg} alt="Phone Background img" />
      </div>
    </header>
  )
}

export default Header
