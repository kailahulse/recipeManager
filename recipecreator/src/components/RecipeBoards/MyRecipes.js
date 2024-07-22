import React from 'react';
import './MyRecipes.css';
import { useNavigate } from 'react-router-dom';

function MyRecipes() {
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/home'); // Use the correct path
        console.log("Navigate to MyRecipes");
      };

    return (
        <button className='styleButton' onClick={navigateHome}> Back to home</button>
    )
}

export default MyRecipes