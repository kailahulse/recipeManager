import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useToken from './useToken'; // Assuming useToken is defined in another file in the src folder
import Login from './components/Login/Login'; // Correct path to Login.js
import Dashboard from './components/Dashboard/Dashboard.js'; // Correct path to Dashboard.js
import MyRecipes from './components/RecipeBoards/MyRecipes.js'; // Correct path to MyRecipes.js
import MyFolders from './components/RecipeBoards/CreateFolder.js'; // Correct path to MyRecipes.js

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <div style={{ textAlign: 'center' }}>
        {/* <h1>Welcome to your recipe board!</h1> */}
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="RecipeBoards" element={<RecipeBoards />} /> */}
          <Route path="/my-recipes" element={<MyRecipes />} /> {/* Define route for MyRecipes */}
          <Route path="/my-folders" element={<MyFolders />} /> {/* Define route for MyRecipes */}
          <Route path="/home" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;