import React from 'react'
import './publications.css'
import publication_data from '../../Data/publication.json'

export const Publications = (props) => {
    return(
    <>
    <div className='publications'>
        <div className='title'>Publications</div>
        {/* <div className='categories'>
            <div className='category'>All</div>
            <div className='category'>Accessibility</div>
            <div className='category'>AI/Algorithm</div>
            <div className='category'>International</div>
            <div className='category'>Domestic</div>
        </div> */}

        {
            publication_data.map((data, index) => (
                <div className='pub_set'>
                    <div className='pub'>
                        <div className='pubtitle'>{data.pubtitle}</div>
                        <div className='authors'>
                            {data.authors.split(", ").map((author, index, array) => {
                                // 마지막 이름이 아닌 경우, 이름 뒤에 쉼표와 공백 추가
                                return (
                                    <span key={index} style={author === "Dasom Choi" ? { fontFamily: "inter-semibold" } : null}>
                                        {author}{index < array.length - 1 ? ', ' : ''}
                                    </span>
                                );
                            })}
                        </div>
                        <div className='venue'>
                            <div className='conference'>{data.conference}</div>
                            <div className='year'>{data.year}</div>
                        </div>
                        <div className='awards'>{data.awards}</div>
                        <div className='others'>
                            <div className='doi'><a href={data.doi_url}>{data.doi}</a></div>
                            <div className='pdf'><a href={data.pdf_url}>{data.pdf}</a></div>
                            <div className='pdf'><a href={data.video_url}>{data.video}</a></div>
                        </div>
                    </div>
                    <div className='pub_year'>
                        <div className='year_info'>{data.year_info}</div>
                        <div className='paper_type'>{data.paper_type}</div>
                    </div>
                </div>
            ))
        }

        
    </div>
    </>
    )
}
