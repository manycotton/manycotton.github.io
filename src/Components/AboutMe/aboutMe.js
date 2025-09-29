import React from 'react'
import './aboutMe.css';
import News from '../News/News.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareXTwitter, faGoogleScholar } from '@fortawesome/free-brands-svg-icons';

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
            <div className='social-icons'>
                <a href='https://www.linkedin.com/in/dasomchoi/' target='_blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faLinkedin} style={{color: "#0a61c0",}} size='2x' />
                </a>
                <a href='https://x.com/manycotton94' target='_blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faSquareXTwitter} style={{color: "#000000",}} size='2x' />
                </a>
                <a href='https://scholar.google.com/citations?hl=ko&user=DGr0O60AAAAJ&view_op=list_works&sortby=pubdate' target='_blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faGoogleScholar} style={{color: "#3f82f8",}} size='2x'/>
                </a>
            </div>
        </div>
        <div className='detailed_info'>
            <div className='description'>
                Hello! 👋 I am a fourth-year PhD candidate in the Department of Industrial Design at KAIST. I am working with <a href="https://www.notion.so/galaxytourist/Hwajung-Hong-cc10b0291bbe4ca38dbf4882cd687423">Prof. Hwajung Hong</a> at <a href='https://dxd-lab.github.io/'>DxD Lab</a>.<br/><br/>
                My research lies at the intersection of Human-Computer Interaction (HCI) and Accessibility, with a strong focus on human-centered design. I study, design, and develop <span className="highlighted">inclusive AI systems</span> that empower minority groups to actively participate in society, all the while preserving their uniqueness and identities. Recently, I have been exploring the characteristics and challenges associated with AI-mediated social interactions among neurodiverse communities, and investigating ways to leverage AI to facilitate their self-exploration and self-advocacy in everyday social interaction.<br/><br/>
                {/* While my research is closely related to autistic individuals, people with vision impairments, Deaf and hard-of-hearing communities, young migrants, and older adults, I am also interested in exploring and addressing the diverse characteristics and needs of other communities.                 */}
            </div>
            <div className='job-market-box'>
                <span style={{ color: '#0057FF' }}>📢 I'm on the job market</span> and open to research roles in both academia and industry, especially in HCI, design, and accessibility.
            </div>

            <News />

        </div>    
    </div>
    </>
    )
}