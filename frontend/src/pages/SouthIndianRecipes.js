import React, { useEffect, useState } from 'react';
import { getRecipes } from '../api'; 
import RecipeRequestForm from '../components/RecipeRequestForm';
import '../styles/pages/SouthIndianRecipes.css'; 

const SouthIndianRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes()
      .then(response => {
        const southIndianRecipes = response.data.filter(recipe => recipe.category === 'South Indian');
        setRecipes(southIndianRecipes);
        console.log('Fetched South Indian recipes:', southIndianRecipes);
      })
      .catch(error => console.error('Error fetching South Indian recipes:', error));
  }, []);

  return (
    <div className="south-indian-recipes">
      <h1>South Indian Recipes</h1>
      <p className="intro-text">Experience the unique flavors of South Indian cuisine.</p>

      <div className="manual-recipe">
        <div className="manual-recipe-image">
          <img src="/images/md.png" alt="Manual Recipe Image" />
        </div>
        <div className="manual-recipe-description">
          <h2>Masala Dosa</h2>
          <p>Masala Dosa is a popular South Indian dish made from fermented rice and lentil batter, filled with a spicy potato filling. It is crispy, savory, and traditionally served with coconut chutney and sambar.</p>
          <div className="buttons">
            <button className="view-ingredients">View Ingredients</button>
            <button className="view-recipe">View Recipe</button>
          </div>
          <p className="hashtags">#MasalaDosa #SouthIndianCuisine #IndianFood</p>
          <p className="origin">Origin: Karnataka, India</p>
          <button className="buy-ingredients">Buy Ingredients</button>
          <div className="rating">
            <span className="stars">★★★★☆</span>
            <span className="rating-number">4.7</span>
          </div>
        </div>
      </div>

      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <h2>{recipe.name}</h2>
            <p>{recipe.ingredients}</p>
            <p>{recipe.instructions}</p>
            {recipe.image_url && <img src={recipe.image_url} alt={recipe.name} />}
          </li>
        ))}
      </ul>

      <h2>Request a South Indian Recipe</h2>
      <RecipeRequestForm category="South Indian" />
    </div>
  );
};

export default SouthIndianRecipes;
