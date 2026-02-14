"use client";

export default function MeasurementType({ measurement, setMeasurement }) {
  const handleChange = (event) => {
    setMeasurement(event.target.value);
  };

  return (
    <div className="min-w-[100px]">
      <div className="flex flex-col space-y-1">
        {/* Label */}
        <label 
          htmlFor="measurementType" 
          className="text-xs font-medium text-gray-500"
        >
          Measurement
        </label>

        {/* Select Input */}
        <select
          id="measurementType"
          value={measurement}
          onChange={handleChange}
          multiple={false}
          className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm 
                     focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 
                     sm:text-sm cursor-pointer"
        >
          <option value="">Select...</option>
          <option value="Cups">Cups</option>
          <option value="Teaspoons">Teaspoons</option>
          <option value="Tablespoons">Tablespoons</option>
          <option value="Fluid">Fluid Ounces</option>
          <option value="Ounces">Ounces</option>
          <option value="Pounds">Pounds</option>
          <option value="None_">/None/</option>
          <option value="Grams">Grams</option>
          <option value="Kilograms">Kilograms</option>
          <option value="Milliliters">Milliliters</option>
        </select>
      </div>
    </div>
  );
}