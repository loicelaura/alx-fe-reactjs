import { useRecipeStore } from '../recipeStore';
import { useParams, useNavigate } from 'react-router-dom';

const DeleteRecipeButton = () => {
  const { recipeId } = useParams();
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate(); 

  const handleDelete = () => {
    deleteRecipe(parseInt(recipeId));
    navigate('/'); // Redirect to the recipe list
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;