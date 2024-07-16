
import React, { useState } from 'react';
import { createRecipeRequest } from '../api'; 
import '../styles/components/RecipeRequestForm.css'; 

function RecipeRequestForm({ category }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [recipeName, setRecipeName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createRecipeRequest({ name, email, recipe_name: recipeName, category });
            console.log('Recipe request submitted successfully');
            alert('Recipe request submitted!');
            setName('');
            setEmail('');
            setRecipeName('');
        } catch (error) {
            console.error('Error submitting recipe request:', error);
        }
    };

    return (
        <form className="recipe-request-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Recipe Name"
                value={recipeName}
                onChange={(e) => setRecipeName(e.target.value)}
                required
            />
            <button type="submit">Request Recipe</button>
        </form>
    );
}

export default RecipeRequestForm;
