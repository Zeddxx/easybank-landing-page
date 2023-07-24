import React from 'react'
import logoFoot from '../assets/images/logo-white.svg'
import fbLogo from '../assets/images/icon-facebook.svg'
import ytLogo from '../assets/images/icon-youtube.svg'
import twitterLogo from '../assets/images/icon-twitter.svg'
import pinterestLogo from '../assets/images/icon-pinterest.svg'
import instaLogo from '../assets/images/icon-instagram.svg'

const Footer = () => {
  return (
    <footer className='foot'>
      <div className="inner-footer">
        <div className="logo-nd-social">
            <div className="foot-main">
                <div className="logo-foot">
                    <div className="logo-footer">
                        <img src={logoFoot} alt="Logo for foot" />
                    </div>
                    <div className="social">
                        <span><img src={fbLogo} alt="" /></span>
                        <span><img src={ytLogo} alt="" /></span>
                        <span><img src={twitterLogo} alt="" /></span>
                        <span><img src={pinterestLogo} alt="" /></span>
                        <span><img src={instaLogo} alt="" /></span>
                    </div>
                </div>
                <div className="foot-menu">
                    <div className="menu-1">
                        <a href="/about">About Us</a>
                        <a href="/contact">Contact</a>
                        <a href="/blog">Blog</a>
                    </div>
                    <div className="menu-2">
                        <a href="/careers">Careers</a>
                        <a href="/support">Support</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>
            </div>
        <div className="btn-foot">
            <button className="request-btn">Request Invite</button>
            <p>© EasyBank. All Rights Reserved.</p>
        </div>
        </div>
      </div>    
    </footer>
  )
}

export default Footer
