"use client";

export default function RecipePrivacy({ privacy, setPrivacy }) {
  const handlePrivacyChange = (event) => {
    // Convert the string "personal" to true, and "public" to false
    const isPrivate = event.target.value === 'personal';
    setPrivacy(isPrivate);
  };

  return (
    <div className="flex flex-col space-y-2 mt-6">
      <span id="recipe-privacy-settings" className="text-sm font-medium text-gray-700">
        Recipe Privacy
      </span>

      <div 
        className="flex flex-row space-x-6 ml-3"
        role="radiogroup" 
        aria-labelledby="recipe-privacy-settings"
      >
        {/* Personal Radio (mapped to true) */}
        <label className="flex items-center cursor-pointer group">
          <input
            type="radio"
            name="privacy"
            value="personal"
            checked={privacy === true} // Check if state is exactly true
            onChange={handlePrivacyChange}
            className="..."
          />
          <span className="ml-2 text-sm text-gray-700 group-hover:text-gray-900">
            Personal
          </span>
        </label>

        {/* Public Radio (mapped to false) */}
        <label className="flex items-center cursor-pointer group">
          <input
            type="radio"
            name="privacy"
            value="public"
            checked={privacy === false} // Check if state is exactly false
            onChange={handlePrivacyChange}
            className="..."
          />
          <span className="ml-2 text-sm text-gray-700 group-hover:text-gray-900">
            Public
          </span>
        </label>
      </div>
    </div>
  );
}