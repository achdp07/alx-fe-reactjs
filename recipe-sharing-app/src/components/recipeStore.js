import creaate from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],

  // Add a new recipe
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),

  // Edit an existing recipe
  SetRecipe: (recipes) => set({ recipes }),

  // Delete a recipe
  deleteRecipe: (Id) => set(state => ({ 
    recipes: state.recipes.filter(recipe => recipe.id !== Id),
  }),

  // Update an existing recipe by ID
  updateRecipe: (updatedRecipe) => set(state => ({
  recipes: state.recipes.map(recipe =>
    recipe.id === updatedRecipe.id ? updatedRecipe : recipe
  ),
  }));
}));

export default useRecipeStore;