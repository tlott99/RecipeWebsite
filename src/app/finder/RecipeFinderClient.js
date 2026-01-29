"use client";

import React, { useState } from 'react';

export default function RecipeFinderClient({ initialRecipes }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCategory, setSearchCategory] = useState('title');
  const [typeSearch, setTypeSearch] = useState('Breakfast');

  const title = "All Recipes";

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Filter the recipes passed from the server
  const recipesToDisplay = initialRecipes.filter((recipe) => {
    const searchTermLower = searchTerm.toLowerCase();

    if (searchCategory === 'mealType') {
      try {
        // Handling your JSON string storage
        const mealTypeData = typeof recipe.mealType === 'string' 
          ? JSON.parse(recipe.mealType) 
          : recipe.mealType;
          
        return (
          (typeSearch === 'All' || mealTypeData.checkedMeal.toLowerCase() === typeSearch.toLowerCase()) &&
          recipe.title.toLowerCase().includes(searchTermLower)
        );
      } catch (e) {
        return recipe.title.toLowerCase().includes(searchTermLower);
      }
    } else {
      const fieldToCheck = recipe[searchCategory]?.toLowerCase() || "";
      return fieldToCheck.includes(searchTermLower);
    }
  });

  return (
    <div className="container col-span-6 justify-self-center xl:col-start-2 xl:col-span-4">
      <h2 className="text-5xl font-normal mb-8 text-gray-900">{title}</h2>

      <div className="flex flex-col md:flex-row gap-6 mb-10 items-end">
        {/* Category Select */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-600">Search By</label>
          <select
            value={searchCategory}
            onChange={(e) => setSearchCategory(e.target.value)}
            className="border border-gray-300 rounded-md p-2.5 bg-white shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="title">Title</option>
            <option value="mealType">Meal Type</option>
          </select>
        </div>

        {/* Search Input */}
        <div className="relative flex-1">
          <label className="flex items-center text-sm font-medium text-gray-600 mb-1">
            <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Search Recipes
          </label>
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-2.5 border border-gray-300 rounded-md shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Conditional Meal Type Select */}
        {searchCategory === 'mealType' && (
          <div className="flex flex-col animate-in fade-in slide-in-from-left-2">
            <label className="mb-1 text-sm font-medium text-gray-600">Meal Type</label>
            <select
              value={typeSearch}
              onChange={(e) => setTypeSearch(e.target.value)}
              className="border border-gray-300 rounded-md p-2.5 bg-white shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Dessert">Dessert</option>
              <option value="Drink">Drink</option>
            </select>
          </div>
        )}
      </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {recipesToDisplay && recipesToDisplay.length > 0 ? (
            recipesToDisplay
            .slice()
            .sort((a, b) => a.title.localeCompare(b.title))
            .map((recipe) => (
                <div key={recipe.id} className="transition-transform hover:scale-[1.01]">
                <a
                    href={`/display-recipe/${recipe.id}`}
                    className="block text-center text-blue-600 font-medium border-2 border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors shadow-sm"
                >
                    {recipe.title}
                </a>
                </div>
            ))
        ) : (
            <p className="col-span-full text-center text-gray-500 italic py-10">
            No recipes found for "{searchTerm}" in {searchCategory}.
            </p>
        )}
        </div>
      
      {recipesToDisplay.length === 0 && (
        <p className="text-center text-gray-500 mt-10 italic">No recipes found matching your criteria.</p>
      )}
    </div>
  );
}