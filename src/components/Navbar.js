import React from 'react'

function Navbar() {
  return (
    <div className='Navbar'>
        <ul>
                <img src={require('./assets/richflix.png')} />
            <li>
                Home
            </li>
            <li >
                <a href={require('./assets/Richard.Ulysse.Resume.pdf')} download>
                Resume
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Navbar