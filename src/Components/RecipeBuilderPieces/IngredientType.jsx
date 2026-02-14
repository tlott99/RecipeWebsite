"use client";

export default function IngredientType({ ingredientType, setIngredientType }) {
  const handleChange = (event) => {
    setIngredientType(event.target.value);
  };

  return (
    <div className="min-w-[120px]">
      <div className="flex flex-col space-y-1">
        {/* Label */}
        <label 
          htmlFor="ingredientType" 
          className="text-xs font-medium text-gray-500"
        >
          ingredientType
        </label>

        {/* Select Input */}
        <select
          id="ingredientType"
          value={ingredientType}
          onChange={handleChange}
          multiple={false}
          className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm 
                     focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 
                     sm:text-sm cursor-pointer"
        >
          <option value="">Select...</option>
          <option value="Grains___Legumes">Grains & Legumes</option>
          <option value="Produce__Fresh_">Produce (Fresh)</option>
          <option value="Dairy___Refrigerated">Dairy & Refrigerated</option>
          <option value="Proteins">Proteins</option>
          <option value="Pantry_Staples">Pantry Staples</option>
          <option value="Spices___Seasonings">Spices & Seasonings</option>
        </select>
      </div>
    </div>
  );
}