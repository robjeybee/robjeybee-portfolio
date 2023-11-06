import React from 'react'

const Main = () => {
  return (
    <div className='main-container'>
        <div className='main-text'>
            <p>Hi, my name's Rob</p>
            <h1>I build websites like this one in React</h1>
            <p>I'm a junior developer with a public relations background. I'm also the host of the Codewords podcast.</p>
            <button>View my work</button>
        </div>
        <div className='main-img'>
            <img className="main-img-item" src="/images/robjeybee-blue-hero-image.svg" alt="" />
        </div>
    </div>
  )
}

export default Main