"use client";

export default function Title({ title, setTitle, slug, setSlug }) {
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    setSlug(event.target.value);
  };

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold text-gray-800">Title</h3>
      
      <div className="mt-4 ml-6 w-full md:w-1/3">
        <label 
          htmlFor="title" 
          className="block text-sm font-medium text-gray-600 mb-1"
        >
          Add New Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          required
          defaultValue={''}
          onChange={handleTitleChange}
          placeholder="Recipe Name..."
          className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm 
                     focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 
                     sm:text-sm"
        />
      </div>
    </div>
  );
}