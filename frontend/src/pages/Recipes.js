import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RecipeList from '../components/RecipeList';
import RecipeDetails from '../components/RecipeDetails';

const Recipes = () => (
  <Routes>
    <Route path="/" element={<RecipeList />} />
    <Route path=":id" element={<RecipeDetails />} />
  </Routes>
);

export default Recipes;
