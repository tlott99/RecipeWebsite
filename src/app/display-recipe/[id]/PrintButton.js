// app/RecipeDisplay/[slug]/PrintButton.js
"use client";

export default function PrintButton({ slug }) {
  return (
    <button 
      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition duration-200" 
      onClick={() => window.open(`/print/${slug}`)}
    >
      Print Recipe
    </button>
  );
}