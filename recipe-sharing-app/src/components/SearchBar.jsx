import React from 'react';
import { useRecipeStore } from '../recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const filterRecipes = useRecipeStore(state => state.filterRecipes); // Add filterRecipes

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    filterRecipes(); // Call filterRecipes on change
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleChange} // Use handleChange
    />
  );
};

export default SearchBar;