import NewCheckbox from "./Checkbox";

export default function MealType({ returnValue, setReturnValue }) {
  return (
    <div className="w-full">
      {/* h5 equivalent */}
      <h3 className="text-xl font-semibold text-gray-800 mt-6">
        Select Meal Type
      </h3>

      {/* Stack replacement: Horizontal flex with wrapping for responsiveness */}
      <div className="flex flex-wrap items-center gap-4 mt-4 ml-6">
        <NewCheckbox 
          x="Breakfast" 
          returnValue={returnValue} 
          setReturnValue={setReturnValue}
        />
        <NewCheckbox 
          x="Lunch" 
          returnValue={returnValue} 
          setReturnValue={setReturnValue}
        />
        <NewCheckbox 
          x="Dinner" 
          returnValue={returnValue} 
          setReturnValue={setReturnValue}
        />
        <NewCheckbox 
          x="Dessert" 
          returnValue={returnValue} 
          setReturnValue={setReturnValue}
        />
        <NewCheckbox 
          x="Drink" 
          returnValue={returnValue} 
          setReturnValue={setReturnValue}
        />
      </div>
    </div>
  );
}