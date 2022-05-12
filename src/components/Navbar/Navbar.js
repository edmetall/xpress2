import React from 'react'

export default function Navbar() {
  return (
    <header>
        <nav>
            <div className="logo">XPRESS</div>
            <div className="menu">
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

