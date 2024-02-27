import React from 'react'
import './News.css';
import news_data from '../../Data/news.json'

const News = (props) => {
  return(
  <> 
  <div className='news'>
    <div className='news_title'>Recent News</div>
      <div className='news_all'>
        {news_data.map((data, index) => (
            <div className='news_each'>
              <div className='news_date'>{data.news_date}</div>
              <div className='news_description'>{data.news_description}</div>
            </div>
          ))
        }
      </div>
      
  </div>
  </>
  );
}

export default News