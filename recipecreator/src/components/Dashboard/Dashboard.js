import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'

export default function Dashboard() {
  const navigate = useNavigate();

  const navigateToRecipes = () => {
    navigate('/MyRecipes.js'); // Use the correct path
    console.log("Navigate to MyRecipes");
  };

  const handleClick = () => {
    navigate('/RecipeBoards/MyRecipes'); // Use the correct path
    console.log("Navigate to MyRecipes");
  };

  return (
    <div>
      <h2>What would you like to do?</h2>
      <div className="container">
        <button className="styleButtons" onClick={handleClick}>
          Create a new recipe folder
        </button>{' '}
        <button className="styleButtons" onClick={navigateToRecipes}>
          View My Recipes
        </button>{' '}
        <button className="styleButtons" onClick={handleClick}>
          Add recipes to an existing folder
        </button>
      </div>
    </div>
  );
}