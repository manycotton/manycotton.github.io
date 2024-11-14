import React, { useState } from 'react'
import './publications.css'
import publication_data from '../../Data/publication.json'

export const Publications = (props) => {
    const [activeTab, setActiveTab] = useState('all');

    const filterPublications = (publications) => {
        switch(activeTab) {
            case 'first-author':
                return publications.filter(pub => 
                    pub.authors.split(", ")[0] === "Dasom Choi"
                );
            case 'full-paper':
                return publications.filter(pub => 
                    !pub.paper_type.includes("Poster") && 
                    !pub.paper_type.includes("Under review")
                );
            case 'preprint':
                return publications.filter(pub => 
                    pub.paper_type.includes("Under review") ||
                    pub.doi === "Arxiv"
                );
            case 'poster':
                return publications.filter(pub => 
                    pub.paper_type.includes("Poster")
                );
            default:
                return publications;
        }
    };

    return(
    <>
    <div className='publications'>
        <div className='title'>Publications</div>
        <div className='categories'>
            <div 
                className={`category ${activeTab === 'all' ? 'active' : ''}`}
                onClick={() => setActiveTab('all')}
            >
                All
            </div>
            <div 
                className={`category ${activeTab === 'first-author' ? 'active' : ''}`}
                onClick={() => setActiveTab('first-author')}
            >
                First Author
            </div>
            <div 
                className={`category ${activeTab === 'full-paper' ? 'active' : ''}`}
                onClick={() => setActiveTab('full-paper')}
            >
                Full Paper
            </div>
            <div 
                className={`category ${activeTab === 'poster' ? 'active' : ''}`}
                onClick={() => setActiveTab('poster')}
            >
                Poster
            </div>
            <div 
                className={`category ${activeTab === 'preprint' ? 'active' : ''}`}
                onClick={() => setActiveTab('preprint')}
            >
                Preprint
            </div>

        </div>

        {
            filterPublications(publication_data).map((data, index) => (
                <div className='pub_set' key={index}>
                    <div className='pub'>
                      <div className='venue'>
                              {data.awards && (
                                  <div className='awards'> {data.awards}</div>
                              )}
                        </div>
                        <div className='pubtitle'>{data.pubtitle}</div>
                        <div className='authors'>
                            {data.authors && data.authors.split(", ").map((author, index, array) => (
                                <React.Fragment key={index}>
                                    <span className={author === "Dasom Choi" ? 'author-highlight' : ''}>
                                        {author}
                                    </span>
                                    {index < array.length - 1 && <span>, </span>}
                                    {' '}
                                </React.Fragment>
                            ))}
                        </div>
                       
                        <div className='others'>
                            {data.doi && data.doi_url && (
                                <div className='doi'><a href={data.doi_url}>{data.doi}</a></div>
                            )}
                            {data.pdf && data.pdf_url && (
                                <div className='pdf'><a href={data.pdf_url}>{data.pdf}</a></div>
                            )}
                            {data.video && data.video_url && (
                                <div className='video'><a href={data.video_url}>{data.video}</a></div>
                            )}
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
