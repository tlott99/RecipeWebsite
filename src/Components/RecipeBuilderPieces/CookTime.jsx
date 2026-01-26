"use client";

import * as React from 'react';

export default function CookTime({ cookTime, setCookTime }) {
  const handleChange = (event) => {
    setCookTime(event.target.value);
  };

  return (
    <div className="min-w-[120px] w-full">
      <div className="relative flex flex-col space-y-1">
        {/* Label */}
        <label 
          htmlFor="cookTime" 
          className="text-sm font-medium text-gray-700"
        >
          Cook Time
        </label>

        {/* Select Input */}
        <select
          id="cookTime"
          value={cookTime}
          onChange={handleChange}
          className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm cursor-pointer"
        >
          {/* Optional placeholder-style empty option */}
          <option value="" disabled>Select time</option>
          
          <option value={10}>10 Minutes</option>
          <option value={20}>20 Minutes</option>
          <option value={30}>30 Minutes</option>
          <option value={40}>40 Minutes</option>
          <option value={50}>50 Minutes</option>
          <option value={60}>60 Minutes</option>
        </select>
      </div>
    </div>
  );
}