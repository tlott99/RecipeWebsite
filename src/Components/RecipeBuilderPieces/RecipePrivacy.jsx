"use client";

import * as React from 'react';

export default function RecipePrivacy({ privacy, setPrivacy }) {
  const handlePrivacyChange = (event) => {
    setPrivacy(event.target.value);
  };

  return (
    <div className="flex flex-col space-y-2 mt-6">
      {/* FormLabel equivalent */}
      <span id="recipe-privacy-settings" className="text-sm font-medium text-gray-700">
        Recipe Privacy
      </span>

      {/* RadioGroup replacement (Row) */}
      <div 
        className="flex flex-row space-x-6 ml-3"
        role="radiogroup" 
        aria-labelledby="recipe-privacy-settings"
      >
        {/* Personal Radio */}
        <label className="flex items-center cursor-pointer group">
          <input
            type="radio"
            name="privacy"
            value="personal"
            checked={privacy === 'personal'}
            onChange={handlePrivacyChange}
            className="w-4 h-4 border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
          />
          <span className="ml-2 text-sm text-gray-700 group-hover:text-gray-900">
            Personal
          </span>
        </label>

        {/* Public Radio */}
        <label className="flex items-center cursor-pointer group">
          <input
            type="radio"
            name="privacy"
            value="public"
            checked={privacy === 'public'}
            onChange={handlePrivacyChange}
            className="w-4 h-4 border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
          />
          <span className="ml-2 text-sm text-gray-700 group-hover:text-gray-900">
            Public
          </span>
        </label>
      </div>
    </div>
  );
}