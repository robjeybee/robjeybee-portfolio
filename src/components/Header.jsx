import React from 'react'
import '../styles/header.scss'

const Header = () => {
  return (
    <div className='header'>
      <div>
        <img className="robjeybee-square-logo" src="/icons/robjeybee-square-logo.svg" alt="" />
      </div>
      <div>
      <i class="fa-solid fa-bars"></i>
      </div>
    </div>
  )
}

export default Header