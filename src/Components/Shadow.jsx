import React from 'react'

const Shadow = ({isActive, setIsActive}) => {
  return (
    <div className={`shadow ${isActive ? 'visible' : ''}`}></div>
  )
}

export default Shadow
