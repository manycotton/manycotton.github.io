import React, { useState } from 'react';
import './News.css';

const News = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return(
  <> 
  <div className='news'>
    <div className='news_title'>Recent News</div>
            <div className='news_description'>
              <div key="2025.5" className="news_item">
                <span className="news_date_underline">2025.5</span>: My research on <i>AACessTalk</i> featured on major Korean TV news channels (<a href="https://youtu.be/War0Qs3u2ss?si=KA_21aRo_r984WcD" target="_blank" style={{ color: '#0057FF', textDecoration: 'none' }}>MBC</a>, <a href="https://youtu.be/Y36zASSEaSs?si=nhqsfHftShvQtTNA" target="_blank" style={{ color: '#0057FF', textDecoration: 'none' }}>KBS</a>, <a href="https://youtu.be/t__yCZwIbr4?si=Rzx9SptJot4zywKF" target="_blank" style={{ color: '#0057FF', textDecoration: 'none' }}>EBS</a>) 📺<br/>
              </div>
              <div key="2025.3" className="news_item">
                <span className="news_date_underline">2025.3</span>: Our paper <i>AACessTalk</i> received a Best Paper Award at CHI 2025 🏆<br/>
              </div>
              <div key="2025.1" className="news_item">
                <span className="news_date_underline">2025.1</span>: Our two papers were conditionally accepted to CHI 2025 🎉<br/>
              </div>
              <div key="2024.9" className="news_item">
                <span className="news_date_underline">2024.9</span>: Excited to received a NRF grant for doctoral research 🎉<br/>
              </div>
            
              {!isCollapsed && (
                <>
                  <div key="2023.4" className="news_item">
                    <span className="news_date_underline">2023.4</span>: Attending CHI 2024 to present our paper 🏝️<br/>
                  </div>
                  <div key="2024.3" className="news_item">
                    <span className="news_date_underline">2024.3</span>: Started internship at NAVER AI Lab, working with Dr. Young-Ho Kim<br/>
                  </div>
                  <div key="2024.2" className="news_item">
                    <span className="news_date_underline">2024.2</span>: Two papers have been accepted to CHI 2024 🎉<br/>
                  </div>
                  <div key="2023.9" className="news_item">
                    <span className="news_date_underline">2023.9</span>: Excited to received a NRF (National Research Foundation of Korea) grant 🎉<br/>
                  </div>
                  <div key="2023.4" className="news_item">
                    <span className="news_date_underline">2023.4</span>: Attending CHI 2023 to present our paper 🇩🇪<br/>
                  </div>
                  <div key="2023.2" className="news_item">
                    <span className="news_date_underline">2023.2</span>: Our two papers have been accepted to CHI 2023 🎉<br/>
                  </div>
                  <div key="2022.4" className="news_item">
                    <span className="news_date_underline">2022.4</span>: Attending CHI 2022 to present our paper 🎭<br/>
                  </div>
                </>
              )}

            <span href="#/" className="toggle_link" onClick={() => setIsCollapsed(!isCollapsed)}>
                {isCollapsed ? '🔽 Show More' : '🔼 Show Less'}
            </span>
            </div>
          </div>
        </>
      );
    }

export default News;