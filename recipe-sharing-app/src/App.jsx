import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import { useRecipeStore } from './components/recipeStore';

function App() {
  
  return (
    <>
     <div>
      <RecipeList />
      <AddRecipeForm  />
      <EditRecipeForm recipeId={1} />
      {/* Assuming EditRecipeForm is defined and imported */}
      <RecipeDetails recipeId={1} />
      {/* Assuming RecipeDetails is defined and imported */}
      <h1>Recipe Sharing App</h1>
      <img src={reactLogo} className="logo react" alt="React logo" />
      <img src={viteLogo} className="logo" alt="Vite logo" />
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
     </div>
    </>
  )
}

export default App
