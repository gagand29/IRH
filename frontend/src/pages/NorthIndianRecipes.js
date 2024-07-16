import React, { useEffect, useState } from 'react';
import { getRecipes } from '../api'; 
import RecipeRequestForm from '../components/RecipeRequestForm';
import '../styles/pages/NorthIndianRecipes.css'; 

const NorthIndianRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes()
      .then(response => {
        const northIndianRecipes = response.data.filter(recipe => recipe.category === 'North Indian');
        setRecipes(northIndianRecipes);
        console.log('Fetched North Indian recipes:', northIndianRecipes);
      })
      .catch(error => console.error('Error fetching North Indian recipes:', error));
  }, []);

  return (
    <div className="north-indian-recipes">
      <h1>North Indian Recipes</h1>
      <p className="intro-text">Discover the rich and diverse flavors of North Indian cuisine.</p>
      
      <div className="manual-recipe">
        <div className="manual-recipe-image">
          <img src="/images/pmb.png" alt="Manual Recipe Image" />
        </div>
        <div className="manual-recipe-description">
          <h2>Paneer Butter Masala</h2>
          <p>Paneer Butter Masala, also known as butter paneer, is a rich & creamy curry made with paneer, spices, onions, tomatoes, cashews, and butter. As the name denotes, the curry is cooked in butter which imparts its characteristic buttery flavor to the dish.</p>
          <div className="buttons">
            <button className="view-ingredients">View Ingredients</button>
            <button className="view-recipe">View Recipe</button>
          </div>
          <p className="hashtags">#PaneerButterMasala #ButterPaneer #NorthIndianCuisine #IndianFood</p>
          <p className="origin">Origin: Punjab, India</p>
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
      
      <h2>Request a North Indian Recipe</h2>
      <RecipeRequestForm category="North Indian" />
    </div>
  );
};

export default NorthIndianRecipes;
