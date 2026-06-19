import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import publication_data from '../Data/publication.json';
import './FullPublicationsPage.css';

const getYear = (year_info) => {
  const match = year_info.match(/(\d{4})/);
  return match ? parseInt(match[1]) : 0;
};

const PubItem = ({ pub }) => {
  const venue = pub.paper_type
    ? `${pub.year_info} ${pub.paper_type}`
    : pub.year_info;

  return (
    <div className="pub-item">
      {pub.awards && <div className="pub-award">{pub.awards}</div>}
      <div className="pub-title">{pub.pubtitle}</div>
      <div
        className="pub-authors"
        dangerouslySetInnerHTML={{
          __html: pub.authors.replace("Dasom Choi", "<u>Dasom Choi</u>")
        }}
      />
      <div className="pub-venue-row">
        <span className="pub-venue-line">{venue}</span>
        {pub.doi_url && <a className="pub-link" href={pub.doi_url} target="_blank" rel="noreferrer">DOI</a>}
        {pub.pdf_url && <a className="pub-link" href={pub.pdf_url} target="_blank" rel="noreferrer">PDF</a>}
        {pub.video_url && <a className="pub-link" href={pub.video_url} target="_blank" rel="noreferrer">Video</a>}
      </div>
    </div>
  );
};

const FullPublicationsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const grouped = publication_data.reduce((acc, pub) => {
    const year = getYear(pub.year_info);
    if (!acc[year]) acc[year] = [];
    acc[year].push(pub);
    return acc;
  }, {});

  const years = Object.keys(grouped).sort((a, b) => b - a);

  return (
    <div className="full-pubs-page">
      <Link to="/" className="back-link">
        &larr; Back to Main
      </Link>

      <div className="page-title">PUBLICATIONS</div>

      {years.map((year) => (
        <div key={year} className="pub-year-group">
          <div className="pub-year-header">{year}</div>
          <div className="pub-grid">
            {grouped[year].map((pub, index) => (
              <PubItem key={index} pub={pub} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FullPublicationsPage;
