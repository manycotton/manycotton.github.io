import React from 'react'
import './navbar.css'

export const Navbar = (props) => {
    return(
    <>
    <div className='navbar'>
        <div className='navbarcontent'>
            <a className='logo' href='#AboutMe'>
                <img className='logoimage' src='images/som_logo.png' alt='logo'/>
            </a>
        </div>
        <div className='links'>
            <a className='navBtn' href='#aboutme'><span>About Me</span></a>
            <a className='navBtn' href='#projects'><span>Projects</span></a>
            <a className='navBtn' href='#publications'><span>Publications</span></a>
            <a className='navBtn' href='https://docs.google.com/document/d/1vplK72VGIwYTQedv9zWqDSAN8mPH0UUUqAxszhEidEE/edit?usp=sharing'><span>CV</span></a>
        </div>
    </div>
    </>
    )
}