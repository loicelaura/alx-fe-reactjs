import { useRecipeStore } from '../recipeStore';
import { useParams } from 'react-router-dom';

const DeleteRecipeButton = () => {
  const { recipeId } = useParams();
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(parseInt(recipeId));
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;