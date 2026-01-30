"use client";

export default function ServingSize({ servingSize, setServingSize }) {
  const handleChange = (event) => {
    setServingSize(event.target.value);
  };

  return (
    <div className="min-w-[120px] w-full">
      <div className="flex flex-col space-y-1">
        {/* Label */}
        <label 
          htmlFor="servingSize" 
          className="text-sm font-medium text-gray-700"
        >
          Serving Size
        </label>

        {/* Select Input */}
        <select
          id="servingSize"
          value={servingSize}
          onChange={handleChange}
          className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm 
                     focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 
                     sm:text-sm cursor-pointer"
        >
          <option value="" disabled>Select count</option>
          <option value={1}>1 Serving</option>
          <option value={2}>2 Servings</option>
          <option value={4}>4 Servings</option>
          <option value={6}>6 Servings</option>
          <option value={8}>8 Servings</option>
          <option value={10}>10 Servings</option>
        </select>
      </div>
    </div>
  );
}