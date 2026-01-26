"use client";

import React, { useState } from 'react';

export default function NewCheckbox({ x, returnValue, setReturnValue }) {
  const [checked, setChecked] = useState(false);
  const label = x;

  const handleCheckedChange = (event) => {
    const isChecked = event.target.checked;
    setChecked(isChecked);
    
    // Logic updated to use the immediate value to avoid state-stale issues
    const thisMeal = {
      checked: isChecked,
      checkedMeal: x
    };
    setReturnValue(thisMeal);
  };

  return (
    <div className="flex items-center space-x-2 py-1">
      <label className="flex items-center cursor-pointer text-sm text-gray-700">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckedChange}
          className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
        />
        <span className="ml-2">
          {label}
        </span>
      </label>
    </div>
  );
}