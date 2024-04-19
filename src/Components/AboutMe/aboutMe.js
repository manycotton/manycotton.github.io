import React from 'react'
import './aboutMe.css';
import News from '../News/News.js';

export const AboutMe = (props) => {
    return(
    <>
    <div className='aboutMe'>
        <div className='profile'>
            <img className='profile_image' src='images/somimage.JPG' alt='profile'/>
            <div className='name'>Dasom Choi</div>
            <div className='degree'>Ph.D. Candidate</div>
            <div className='researchArea'>HCI, Accessibility, Design</div>
            <div className='affiliation'>Dept. Industrial Design, KAIST</div>
            <div className='email'>dasomchoi@kaist.ac.kr</div>
        </div>
        <div className='detailed_info'>
            <div className='description'>
                Hello! 👋 I am a third year PhD candidate in the Department of Industrial Design at KAIST. I am working with <a href="https://www.notion.so/galaxytourist/Hwajung-Hong-cc10b0291bbe4ca38dbf4882cd687423">Prof. Hwajung Hong</a> at <a href='https://dxd-lab.github.io/'>DxD Lab</a>.<br/><br/>
                My research interest sits at the intersection of <span className='highlighted'>Human-AI Interaction</span> and <span className='highlighted'>Accessibility</span>, with a strong emphasis on a Human-Centered design approach. I mostly study and design <span className="highlighted">inclusive AI systems</span> for minority groups of people. Particularly, I am interested in investigating how current AI services cater to the unique identities and values of users with disabilities. Based on these understandings, I am recently working on leveraging AI to enrich the communication of non-verbal autistic children.
                {/* <br/><br/> */}
                {/* <span className='highlighted2'>Keywords</span>: Human-AI Interaction; Value-sensitive AI;  Neurodiverse population */}
            </div>

            <News />

        </div>    
    </div>
    </>
    )
}