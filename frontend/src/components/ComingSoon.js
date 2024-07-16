import React from 'react';
import '../styles/components/ComingSoon.css';

const ComingSoon = () => {
  return (
    <div className="coming-soon">
      <div className="coming-soon-text">
        <h1>Coming Soon</h1>
        <p>
          This project is a work in progress. Feel free to provide us with your feedback about the website and its information. This is a test project designed for my interview.
        </p>
        <ul>
          <li>Frontend: React.js to build a simple web page using components.</li>
          <li>Backend: Django to build at least two API endpoints for the frontend.</li>
        </ul>
      </div>
      <div className="coming-soon-image">
        <img src="/images/cs.png" alt="Coming Soon" />
      </div>
    </div>
  );
};

export default ComingSoon;
