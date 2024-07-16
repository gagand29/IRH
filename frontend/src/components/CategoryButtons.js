import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/components/CategoryButtons.css';

const CategoryButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="category-buttons">
      <h2>Browse Famous Indian Recipes</h2>
      <p className="intro-text">
        Explore the rich and diverse culinary heritage of India. You can also buy all the ingredients you need to create these delicious dishes at home.
      </p>
      <div className="marquee-container">
        <marquee behavior="scroll" direction="left" scrollamount="5">
        • Discover aromatic spices of the North     • Experience tangy flavors of the South     • Find the perfect recipe for any occasion
        </marquee>
      </div>
      <div className="categories">
        <div className="category">
          <img src="/images/NI.png" alt="North Indian Recipes" />
          <button onClick={() => navigate('/recipes/north-indian')}>North Indian Recipes</button>
        </div>
        <div className="category">
          <img src="/images/SI.png" alt="South Indian Recipes" />
          <button onClick={() => navigate('/recipes/south-indian')}>South Indian Recipes</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryButtons;
