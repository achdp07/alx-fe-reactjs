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
     </div>
    </>
  )
}

export default App
