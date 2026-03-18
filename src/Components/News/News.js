import React from 'react';
import './News.css';

const News = (props) => {


  const newsItems = [
    { date: '2025.5', content: <span>My research on <i>AACessTalk</i> featured on major Korean TV news channels (<a href="https://youtu.be/War0Qs3u2ss?si=KA_21aRo_r984WcD" target="_blank" rel="noreferrer">MBC</a>, <a href="https://youtu.be/Y36zASSEaSs?si=nhqsfHftShvQtTNA" target="_blank" rel="noreferrer">KBS</a>, <a href="https://youtu.be/t__yCZwIbr4?si=Rzx9SptJot4zywKF" target="_blank" rel="noreferrer">EBS</a>) 📺</span> },
    { date: '2025.3', content: <span>Our paper <i>AACessTalk</i> received a Best Paper Award at CHI 2025 🏆</span> },
    { date: '2025.1', content: <span>Our two papers were conditionally accepted to CHI 2025 🎉</span> },
    { date: '2024.9', content: <span>Excited to received a NRF grant for doctoral research 🎉</span> },
    { date: '2023.4', content: <span>Attending CHI 2024 to present our paper 🏝️</span> },
    { date: '2024.3', content: <span>Started internship at NAVER AI Lab, working with Dr. Young-Ho Kim</span> },
    { date: '2024.2', content: <span>Two papers have been accepted to CHI 2024 🎉</span> },
    { date: '2023.9', content: <span>Excited to received a NRF (National Research Foundation of Korea) grant 🎉</span> },
    { date: '2023.4', content: <span>Attending CHI 2023 to present our paper 🇩🇪</span> },
    { date: '2023.2', content: <span>Our two papers have been accepted to CHI 2023 🎉</span> },
    { date: '2022.4', content: <span>Attending CHI 2022 to present our paper 🎭</span> },
  ];

  return (
    <div className='news-list'>
      {newsItems.map((item, index) => (
        <div key={index} className='news-item'>
          <div className='news-date'>{item.date}</div>
          <div className='news-content'>{item.content}</div>
        </div>
      ))}
    </div>
  );
}

export default News;