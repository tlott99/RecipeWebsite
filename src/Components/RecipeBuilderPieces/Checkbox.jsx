"use client";

import { useState, useEffect } from 'react';

// Change 'returnValue' and 'setReturnValue' to 'mealType' and 'setMealType'
export default function NewCheckbox({ x, mealType, setMealType }) {
  // Check if this specific box is the one currently selected in the parent state
  const isChecked = mealType?.checkedMeal === x;

  const handleCheckedChange = (event) => {
    const checkedStatus = event.target.checked;
    
    // If checked, send the meal type. If unchecked, send an empty object or null.
    const thisMeal = checkedStatus 
      ? { checked: true, checkedMeal: x }
      : { checked: false, checkedMeal: "" };

    setMealType(thisMeal);
  };

  return (
    <div className="flex items-center space-x-2 py-1">
      <label className="flex items-center cursor-pointer text-sm text-gray-700">
        <input
          type="checkbox"
          // This ensures the UI reflects the actual parent state
          checked={isChecked} 
          onChange={handleCheckedChange}
          className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
        />
        <span className="ml-2">{x}</span>
      </label>
    </div>
  );
}