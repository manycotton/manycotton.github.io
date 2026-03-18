import React from 'react';
import { Link } from 'react-router-dom';
import './WorkWithMePage.css';

const WorkWithMePage = () => {
  return (
    <div className="work-page">
      {/* Back Button */}
      <Link to="/" className="back-link">
        &larr; Back to Main
      </Link>

      {/* Title */}
      <div className="page-title">
        Work with me
      </div>

      {/* Content Area */}
      <div className="page-content">
        <p className="work-intro">
          I am looking for self-motivated, creative researchers who want to build a more inclusive future through human-centered technology.
        </p>

        <section className="work-section">
          {/* <h2>Open Positions</h2> */}

          <div className="work-subsection">
            <h3>Ph.D. Students</h3>
            <p>
              I am recruiting three fully-funded Ph.D. students for the Spring 2027 and Fall 2027 intakes.
            </p>
          </div>

          <div className="work-subsection">
            <h3>Postdoctoral Researcher</h3>
            <p>
              I am looking for postdoctoral researchers to lead research in inclusive AI systems. If you are passionate about investigating the social impact of AI and building real-world AI systems that empower users, please reach out to discuss potential opportunities.
            </p>
          </div>

          <div className="work-subsection">
            <h3>Undergraduate Interns & Visiting Researchers</h3>
            <p>
              I welcome research interns and visiting scholars from diverse backgrounds who want to gain hands-on experience in human-centered AI and inclusive design.
            </p>
          </div>
        </section>

        <section className="work-section">
          {/* <h2>How to Apply</h2> */}
          <p>
            If you’re interested in joining the lab, please send an email to <a href="">dasom@nus.edu.sg</a> with:
          </p>
          <ul className="work-list">
            <li>Your CV and a brief note on what you hope to achieve or learn in our lab.</li>
            <li>A short description of your research interests.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default WorkWithMePage;
