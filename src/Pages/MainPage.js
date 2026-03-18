import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';
import News from '../Components/News/News';
import publication_data from '../Data/publication.json';

const LongArrowIcon = ({ size = 24, strokeWidth = 1, color = "currentColor" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="action-icon"
  >
    <path 
      d="M5 19L19 5M19 5V15M19 5H9" 
      stroke={color} 
      strokeWidth={strokeWidth} 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const AnimatedText = ({ text, className, effect = "wave" }) => (
  <span className={`animated-text ${effect} ${className}`}>
    {text.split('').map((char, i) => (
      <span key={i} style={{ '--i': i }} className="animated-char">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))}
  </span>
);

export const MainPage = () => {
  // --- News Data (Internal) ---
  const newsData = [
    { date: "SEP 2025", content: "Our paper on AI-mediated communication was accepted to CSCW 2025!" },
    { date: "AUG 2025", content: "Started as an Assistant Professor at NUS (Presidential Young Professor)." },
    { date: "JUL 2025", content: "Defended my Ph.D. thesis at KAIST. Huge thanks to my advisor and committee." },
    { date: "JUN 2025", content: "Presented our work on 'Generative AI for Accessibility' at DIS 2025 in Copenhagen." },
    { date: "MAY 2025", content: "Received the Best Paper Honorable Mention at CHI 2025." },
  ];

  return (
    <div className="main-page">
      
      {/* Top Bar: Name Only + Right Link */}
      <nav className="top-bar">
        <div className="site-title">
          DASOM CHOI
        </div>
        <Link to="/work-with-me" className="top-link">
           Work with me <LongArrowIcon size={21} strokeWidth={1.5} />
        </Link>
      </nav>

      {/* Main Grid: Left (Bio+Pubs) vs Right (Image+News) */}
      <div className="content-grid">
        
        {/* Left Column: Bio + Publications */}
        <div className="left-col">
          <div className="huge-bio">
            <p>
              I am an Assistant Professor (Presidential Young Professor) at the <a href="https://cde.nus.edu.sg/did/" target="_blank" rel="noopener noreferrer">Division of Industrial Design</a> and the College of Design and Engineering at the National University of Singapore (NUS).
              {/* , where I direct the <span className="bio-stroke">SURF Lab</span>. */}
            </p>
            <br />
            <p>
              My research spans Human-Computer Interaction (HCI), Accessibility, and <AnimatedText text="human-centered AI" className="bio-handwritten" effect="wave" />, with a focus on designing <AnimatedText text="inclusive technologies" className="bio-focus" effect="pop" /> for neurodivergent and marginalized communities. I study, design, and develop inclusive AI systems that empower <AnimatedText text="minority groups" className="bio-pixel" effect="glitch" /> to actively participate in society and to have their lived experiences meaningfully represented in sociotechnical systems.
            </p>
            <br />
            <p>
              My research has been published in top HCI venues including CHI, DIS, and CSCW, and has been recognized with Best Paper and Honorable Mention awards. I received my Ph.D. in <a href="https://id.kaist.ac.kr/" target="_blank" rel="noopener noreferrer">Industrial Design</a> from KAIST, advised by <a href="https://www.notion.so/galaxytourist/Hwajung-Hong-cc10b0291bbe4ca38dbf4882cd687423" target="_blank" rel="noopener noreferrer">Prof. Hwajung Hong</a>.
            </p>
          </div>
          
          {/* Action Links
          <div className="action-links">
             <a href="mailto:dasomchoi@kaist.ac.kr" className="action-link">
               <span>Work with me</span> 
               <LongArrowIcon size={38} strokeWidth={2} />
             </a>
             <a href="https://scholar.google.com/citations?user=yourID" target="_blank" rel="noreferrer" className="action-link">
               <span>Publications</span> 
               <LongArrowIcon size={38} strokeWidth={2} />
             </a>
          </div> */}

          {/* Publications Section */}
          <div className="publications-section" id="publications" style={{marginTop: '100px'}}>
             <div className="section-title" style={{
                paddingBottom:'10px', 
                marginBottom:'20px', 
                textTransform:'uppercase', 
                fontWeight:'700',
                fontSize: '1.2rem',
                textDecoration: 'underline',
                textUnderlineOffset: '6px'
             }}>
                Selected Publications
             </div>
             
             <div className="pub-grid">
                {publication_data
                   .filter(pub => 
                      pub.authors.trim().startsWith("Dasom Choi") && 
                      !pub.paper_type 
                   )
                   .map((pub, index) => (
                  <div key={index} className="pub-item">
                     {/* Award Badge (Top, Full Width) */}
                     {pub.awards && <div className="pub-award">{pub.awards}</div>}
                     
                     <div className="pub-inner-row">
                        {/* Left: Content (Title, Authors, Tags) */}
                        <div className="pub-left">
                           {/* Title */}
                           <div className="pub-title">{pub.pubtitle}</div>
                           
                           {/* Authors */}
                           <div 
                              className="pub-authors" 
                              dangerouslySetInnerHTML={{
                                __html: pub.authors.replace("Dasom Choi", "<u>Dasom Choi</u>")
                              }}
                           />

                           {/* Tags */}
                           <div className="pub-tags">
                              {pub.doi_url && <a href={pub.doi_url} target="_blank" rel="noreferrer">DOI</a>}
                              {pub.pdf_url && <a href={pub.pdf_url} target="_blank" rel="noreferrer">PDF</a>}
                              {pub.video_url && <a href={pub.video_url} target="_blank" rel="noreferrer">Video</a>}
                           </div>
                        </div>

                        {/* Right: Venue */}
                        <div className="pub-right">
                           <div className="pub-venue">{pub.year_info}</div>
                           {pub.paper_type && <div className="pub-paper-type">{pub.paper_type}</div>}
                        </div>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Right Column: Image (w/ Kick) & News */}
        <div className="right-col">
          
          {/* Image Sidebar with Contact Overlay */}
          <div className="image-sidebar-wrapper">
             <img src="images/profile side.png" alt="Dasom Choi" className="bio-image" />
             
             {/* The "Kick": Transparent Contact Overlay */}
             <div className="contact-overlay">
                <a href="">dasom@nus.edu.sg</a>
                <a href="https://linkedin.com/in/dasomchoi" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://scholar.google.com/citations?user=DGr0O60AAAAJ&hl=ko&oi=ao" target="_blank" rel="noreferrer">Google Scholar</a>
                <a href="https://docs.google.com/document/d/1vplK72VGIwYTQedv9zWqDSAN8mPH0UUUqAxszhEidEE/edit?tab=t.0#heading=h.5x0d5h95i329" target="_blank" rel="noreferrer">CV</a>
             </div>
          </div>

          {/* News (Full List) */}
          <div className="sidebar-news">
             <div style={{
                fontWeight:'700', 
                marginBottom:'25px', 
                textTransform:'uppercase',
                textDecoration: 'underline', 
                textUnderlineOffset: '5px'
             }}>
                Latest News
             </div>
             <News />
          </div>

          {/* Prospective Students (Moved to Right Bottom for balance, or can keep full width bottom? User didn't specify, but implies structure change. Let's keep it in right col to fill space under news or bottom. Let's put it at the bottom of Right Col for now as 'News' is there.) */}

        </div>
      </div>
      
      {/* Footer */}
      <footer className="footer">
        Copyright © Dasom Choi
      </footer>

    </div>
  );
};
