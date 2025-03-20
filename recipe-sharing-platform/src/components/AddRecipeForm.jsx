// src/components/AddRecipeForm.jsx
import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    let formErrors = {};

    if (!title) {
      formErrors.title = 'Title is required';
    }
    if (!ingredients) {
      formErrors.ingredients = 'Ingredients are required';
    } else {
      const ingredientList = ingredients.split('\n').filter(item => item.trim() !== '');
      if (ingredientList.length < 2) {
        formErrors.ingredients = 'At least two ingredients are required';
      }
    }
    if (!steps) {
      formErrors.steps = 'Steps are required';
    }

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Process form submission (e.g., send data to an API)
    console.log({ title, ingredients, steps });

    // Reset form fields
    setTitle('');
    setIngredients('');
    setSteps('');
    setErrors({});
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Add New Recipe</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* ... (rest of the form input fields and error messages) */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${errors.title ? 'border-red-500' : ''}`}
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>
        <div>
          <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">
            Ingredients (one per line)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="4"
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${errors.ingredients ? 'border-red-500' : ''}`}
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>
        <div>
          <label htmlFor="steps" className="block text-sm font-medium text-gray-700">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            rows="4"
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${errors.steps ? 'border-red-500' : ''}`}
          ></textarea>
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
        </div>
        <div>
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;