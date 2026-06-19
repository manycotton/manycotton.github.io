import React from 'react'
import './publications.css'
import publication_data from '../../Data/publication.json'

export const Publications = (props) => {
    return (
        <>
            <div className='publications'>
                <div className="pub-grid">
                    {
                        publication_data.map((pub, index) => (
                            <div key={index} className="pub-item">
                                {/* Award Badge (Top, Full Width) */}
                                {pub.awards && <div className="pub-award">{pub.awards}</div>}
                                
                                <div className="pub-inner-row">
                                    {/* Left: Content (Title, Authors, Tags) */}
                                    <div className="pub-left" style={{ width: '100%', maxWidth: '720px', paddingRight: '20px' }}>
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
                        ))
                    }
                </div>
            </div>
        </>
    )
}
