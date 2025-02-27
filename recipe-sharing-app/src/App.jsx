import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import DeleteRecipeButton from './components/DeleteRecipeButton';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import { useRecipeStore } from './recipeStore';
import FavoriteButton from './components/FavoriteButton';
import SearchBar from './components/SearchBar'; // Import SearchBar

function App() {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <Router>
      <div className="App">
        <h1>Recipe Sharing App</h1>
        <SearchBar /> {/* Add SearchBar */}
        <AddRecipeForm />
        <RecipeList />
        <FavoritesList />
        <RecommendationsList />
        <Routes>
          <Route path="/recipe/:recipeId" element={
            <div>
              <RecipeDetails />
              <EditRecipeForm />
              <DeleteRecipeButton />
              <FavoriteButton recipeId={parseInt(useParams().recipeId)} />
              <Link to="/">Back to List</Link>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;