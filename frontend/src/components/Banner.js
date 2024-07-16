
import React from 'react';
import '../styles/components/banner.css';

const Banner = () => (
  <div className="banner">
    <div className="banner-text">
      <h1>Welcome to Indian Recipe Hub</h1>
      <p>
        Embark on a culinary journey through India's diverse flavors. Explore authentic North and South Indian recipes, from aromatic curries to savory dosas. Discover the rich tapestry of Indian cuisine, one delicious dish at a time.
      </p>
    </div>
    <div className="banner-image">
      <img src="/images/Banner.png" alt="Indian Recipe Hub" />
    </div>
  </div>
);

export default Banner;
