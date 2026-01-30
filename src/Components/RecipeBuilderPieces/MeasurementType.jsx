"use client";

export default function MeasurementType({ measurement, setMeasurement }) {
  const handleChange = (event) => {
    setMeasurement(event.target.value);
  };

  return (
    <div className="min-w-[120px]">
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
          <option value="c.">Cups</option>
          <option value="tsp.">Teaspoons</option>
          <option value="tbsp.">Tablespoons</option>
          <option value="fl.oz.">Fluid Ounces</option>
          <option value="oz.">Ounces</option>
          <option value="lbs.">Pounds</option>
          <option value="">/None/</option>
          <option value="g.">Grams</option>
          <option value="kg.">Kilograms</option>
        </select>
      </div>
    </div>
  );
}