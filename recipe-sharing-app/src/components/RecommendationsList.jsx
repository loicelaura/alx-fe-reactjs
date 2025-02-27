import { useRecipeStore } from '../recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  const handleGenerateRecommendations = () => {
    generateRecommendations();
  };

  return (
    <div>
      <h2>Recommendations</h2>
      <button onClick={handleGenerateRecommendations}>Generate Recommendations</button>
      {recommendations.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;