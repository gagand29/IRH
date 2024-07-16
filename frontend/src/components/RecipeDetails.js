import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RecipeDetails = () => {
  const { category, id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get(`/api/recipes/${category}/${id}`).then(response => {
      setRecipe(response.data);
    });
  }, [category, id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div>
      <h2>{recipe.name}</h2>
      <p>{recipe.description}</p>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetails;
