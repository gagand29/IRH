import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const RecipeList = () => {
  const { category } = useParams();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get(`/api/recipes/${category}`).then(response => {
      setRecipes(response.data);
    });
  }, [category]);

  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h2><Link to={`/recipes/${category}/${recipe.id}`}>{recipe.name}</Link></h2>
          <p>{recipe.description}</p>
        </div>
      ))}
      <div>
        <h3>Request a recipe</h3>
        <textarea placeholder="Enter your recipe request"></textarea>
      </div>
    </div>
  );
};

export default RecipeList;
