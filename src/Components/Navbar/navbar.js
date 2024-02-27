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
            <a className='navBtn' href='papers/CV_DasomChoi.pdf'><span>CV</span></a>
        </div>
    </div>
    </>
    )
}