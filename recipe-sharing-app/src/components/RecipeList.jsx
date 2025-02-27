import { useRecipeStore } from '../recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes); // Use filteredRecipes
  const searchTerm = useRecipeStore(state => state.searchTerm); // Get searchTerm
  const recipes = useRecipeStore(state => state.recipes);

  const recipesToDisplay = searchTerm ? filteredRecipes : recipes;

  return (
    <div>
      {recipesToDisplay.map(recipe => (
        <div key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;