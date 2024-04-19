import React, { useState } from 'react';
import './News.css';

const News = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return(
  <> 
  <div className='news'>
    <div className='news_title'>Recent News</div>
            <div className='news_description'>
              <span className="news_date_underline">2024.3</span>: Hi! I'm Dasom Choi<br/>
              <span className="news_date_underline">2024.3</span>: Started internship at NAVER AI Lab, working with Dr. Young-Ho Kim<br/>
              <span className="news_date_underline">2024.2</span>: Two papers have been accepted to CHI 2024 🎉<br/>
              <span className="news_date_underline">2023.9</span>: Excited to received a NRF (National Research Foundation of Korea) grant ($15,000) 🎉<br/>
              <span className="news_date_underline">2023.4</span>: Attending CHI 2023 to present our paper 🇩🇪<br/>
            
              {!isCollapsed && (
                <>
                  <span className="news_date_underline">2023.2</span>: Our two papers have been accepted to CHI 2023 🎉<br/>
                  <span className="news_date_underline">2022.4</span>: Attending CHI 2022 to present our paper 🎭<br/>
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