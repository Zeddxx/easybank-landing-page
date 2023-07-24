import React from 'react'


const HamburgerBtn = ({isActive, setIsActive}) => {

  return (
    <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={() => {setIsActive(!isActive)}}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  )
}

export default HamburgerBtn
