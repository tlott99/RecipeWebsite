"use client";

import { useState } from "react";
import MeasurementType from "./MeasurementType";

export default function Ingredients({ ingredientsList, setIngredientsList }) {
  const [measurement, setMeasurement] = useState('');
  const [amount, setAmount] = useState(['']);
  const [newIngredient, setNewIngredient] = useState('');

  const handleIngredientAdd = () => {
    const thisIngredient = {
      ingredient: newIngredient,
      measurement: measurement,
      amount: amount
    };
    setIngredientsList([...ingredientsList, thisIngredient]);
    // Optional: Clear internal inputs after adding
    setNewIngredient('');
  };

  const handleIngredientChange = (event) => {
    setNewIngredient(event.target.value);
  };

  const handleIngredientRemove = (index) => {
    const updatedIngredients = [...ingredientsList];
    updatedIngredients.splice(index, 1);
    setIngredientsList(updatedIngredients);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold text-gray-800">Add New Ingredients</h3>
      
      {/* Input Row: Replaces Stack and Box */}
      <div className="flex flex-wrap items-end gap-4 mt-4 ml-6">
        <div className="flex flex-col space-y-1">
          <label className="text-xs font-medium text-gray-500">Amount</label>
          <input
            name="amount"
            type="text"
            onChange={handleAmountChange}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder="e.g. 1/2"
          />
        </div>

        <MeasurementType 
          measurement={measurement} 
          setMeasurement={setMeasurement} 
        />

        <div className="flex flex-col space-y-1">
          <label className="text-xs font-medium text-gray-500">Ingredient Type</label>
          <input
            name="ingredient"
            type="text"
            id="ingredient"
            onChange={handleIngredientChange}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder="e.g. Flour"
          />
        </div>

        <button
          type="button"
          onClick={handleIngredientAdd}
          className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md text-sm font-medium transition-colors"
        >
          Add an Ingredient
        </button>
      </div>

      {/* List Display */}
      <h3 className="text-xl font-semibold text-gray-800 mt-8">Ingredients</h3>
      <div className="mt-4 ml-4">
        <ul className="space-y-2">
          {ingredientsList.map((ingredient, index) => (
            <li key={index} className="flex items-center text-gray-700">
              {ingredient.ingredient && (
                <>
                  <span className="bg-gray-100 px-2 py-1 rounded text-sm">
                    {ingredient.amount} {ingredient.measurement} {ingredient.ingredient}
                  </span>
                  <button
                    onClick={() => handleIngredientRemove(index)}
                    className="ml-3 text-xs text-red-600 hover:text-red-800 border border-red-200 hover:border-red-600 px-2 py-1 rounded transition-all"
                  >
                    Remove
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}