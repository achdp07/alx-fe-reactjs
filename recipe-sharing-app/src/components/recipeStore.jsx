import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],

  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes : [],
  filterRecipes: (term) => set((state) => ({
    filteredRecipes: state.recipes.filter((recipe) => recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )}),
)}) ,

  // Add a new recipe
  addRecipe, (newRecipe) => set((state) => ({
    recipes: [...state.recipes, newRecipe],
  })),

  // Set all recipes
  setRecipes, (recipes) => set({ recipes }),

  // Delete a recipe
  deleteRecipe, (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  // Update an existing recipe
  updateRecipe, (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  )
export default useRecipeStore;
