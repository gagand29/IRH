import React from 'react';
import '../styles/pages/About.css';
import ComingSoon from '../components/ComingSoon';

const About = () => (
  <div className="about-container">
    <div className="about-banner">
      <div className="about-content">
        <h2>About Indian Recipe Hub</h2>
        <p>
          Indian Recipe Hub bridges the gap between traditional culinary heritage and modern digital needs. Our platform allows you to explore and recreate authentic Indian recipes using local ingredients, making the most of your fridge contents and kitchen tools.
        </p>
      </div>
      <div className="about-image">
        <img src="/images/ic.png" alt="Indian Cuisine" />
      </div>
    </div>

    <div className="about-section about-features-plans">
      <div className="features">
        <h3>Features:</h3>
        <ul>
          <li><strong>Recipe Database:</strong> A curated collection of authentic North and South Indian recipes.</li>
          <li><strong>Community Interaction:</strong> Share and rate recipes, join discussions, and participate in events.</li>
          <li><strong>User-Generated Content:</strong> Upload your recipes and photos.</li>
          <li><strong>Personalization:</strong> Get personalized recipe recommendations and dietary adaptations.</li>
          <li><strong>E-commerce Integration:</strong> Purchase ingredients directly through the platform.</li>
        </ul>
      </div>
      <div className="future-plans">
        <h3>Future Plans:</h3>
        <ul>
          <li><strong>Enhanced Personalization:</strong> Tailor recommendations based on your preferences and dietary needs.</li>
          <li><strong>Expanded Recipe Collection:</strong> Continuously add new recipes from various regions of India.</li>
          <li><strong>Improved Community Features:</strong> Host live cooking classes and virtual events.</li>
        </ul>
      </div>
    </div>
    <ComingSoon />
  </div>
);

export default About;
