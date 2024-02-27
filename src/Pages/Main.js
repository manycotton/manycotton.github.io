import React from 'react'
import { AboutMe } from '../Components/AboutMe/aboutMe';
import { Projects } from '../Components/Projects/projects'
import { Publications } from '../Components/Publications/publications';
import { Navbar } from '../Components/Navbar/navbar';
import './pages.css'

export const Main = (props) => {
    return(
    <> 
    <div className='mainpage'>
        <Navbar/>
        <div id="aboutme"><AboutMe/></div>
        <div id="projects"><Projects/></div>
        <div id='publications'><Publications/></div>
        <div className='footer'>Copyright © Dasom Choi</div>
    </div>
    </>
    )
}