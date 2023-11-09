import React from 'react'
import '../styles/hero.scss'
import '../styles/buttons.scss'

const Main = () => {
  return (
    <div className='hero-container'>
        <div className='hero-text'>
            <p>Hi, my name's Rob</p>
            <h1>I build websites like this one in React</h1>
            <p>I'm a junior developer with a public relations background. I'm also the host of the Codewords podcast.</p>
            <div>
               <button className='buttons'>View my work</button>
            </div>
           
        </div>
        <div className='hero-img'>
            <img className="hero-img-item" src="/images/robjeybee-blue-shield.svg" alt="" />
        </div>
    </div>
  )
}

export default Main