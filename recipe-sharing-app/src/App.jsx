import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import DeleteRecipeButton from './components/DeleteRecipeButton';
import { useRecipeStore } from './recipeStore';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Recipe Sharing App</h1>
        <AddRecipeForm />
        <RecipeList />
        <Routes>
          <Route path="/recipe/:recipeId" element={
            <div>
              <RecipeDetails />
              <EditRecipeForm />
              <DeleteRecipeButton />
              <Link to="/">Back to List</Link>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;