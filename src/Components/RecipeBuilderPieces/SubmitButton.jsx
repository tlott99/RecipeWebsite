"use client";

import React from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_MUTATION, PUBLISH_MUTATION } from '../../graphQLQuery';

export default function SubmitButton({
  title,
  mealType,
  description,
  ingredients,
  instructions,
  slug,
  privacy,
  cookTime,
  prepTime,
  servingSize
}) {
  const [addRecipes, { loading, error }] = useMutation(CREATE_MUTATION);
  const [publishRecipe] = useMutation(PUBLISH_MUTATION);

  // Error handling
  if (error) {
    console.error("Mutation Error:", error);
    return <p className="text-red-500 mt-4">Error saving recipe. Please try again.</p>;
  }

  const newTitle = title;
  const newMealType = JSON.stringify(mealType);
  const newIngredients = JSON.stringify(ingredients);
  const newInstructions = JSON.stringify(instructions);
  // Auto-generate slug from title if not explicitly passed
  const newSlug = slug || newTitle.replace(/\s+/g, '-').toLowerCase();

  const AddRecipe = async (e) => {
    e.preventDefault();
    try {
      const result = await addRecipes({
        variables: {
          title: newTitle,
          mealType: newMealType,
          ingredients: newIngredients,
          instructions: newInstructions,
          description: description,
          slug: newSlug,
          recipePrivacy: privacy,
          cookTime: cookTime,
          prepTime: prepTime,
          servingSize: servingSize,
        },
      });

      const recipeId = result.data.createRecipe.id;
      
      await publishRecipe({
        variables: {
          id: recipeId,
        },
      });

      // Redirecting using standard window location as per original code
      window.location.href = '/RecipeFinder';
    } catch (err) {
      console.error("Execution Error:", err);
    }
  };

  return (
    <div className="mt-6 mb-10">
      <button
        onClick={AddRecipe}
        disabled={loading || !title}
        className={`px-8 py-2 rounded-md font-medium transition-all duration-200 
          ${loading 
            ? "bg-gray-200 text-gray-400 cursor-not-allowed border-gray-200" 
            : "bg-white border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white active:bg-blue-700 shadow-sm"
          }`}
      >
        {loading ? (
          <span className="flex items-center">
            <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Saving...
          </span>
        ) : (
          "Submit Recipe"
        )}
      </button>
    </div>
  );
}