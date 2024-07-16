import axios from 'axios';
import config from './config';

const api = axios.create({
    baseURL: `${config.apiUrl}/api`,
});

export const getRecipes = () => api.get('/recipes/');
export const getRecipe = (id) => api.get(`/recipes/${id}/`); // future
export const createRecipeRequest = (data) => api.post('/recipe-requests/', data);
export const createFeedback = (data) => api.post('/feedback/', data);
