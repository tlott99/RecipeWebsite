"use client";

export default function Description({ description, setDescription }) {
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold text-gray-800">Description</h3>
      
      <div className="mt-4 ml-6 w-full md:w-1/2">
        <label 
          htmlFor="description" 
          className="block text-sm font-medium text-gray-600 mb-1"
        >
          Add New Description
        </label>
        <textarea
          name="description"
          id="description"
          rows={4}
          defaultValue={''}
          onChange={handleDescriptionChange}
          placeholder="Enter recipe description..."
          className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm 
                     focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 
                     sm:text-sm resize-y"
        />
      </div>
    </div>
  );
}