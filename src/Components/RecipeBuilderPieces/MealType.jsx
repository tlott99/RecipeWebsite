import NewCheckbox from "./Checkbox";

export default function MealType({ mealType, setMealType }) {
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
          mealType={mealType} 
          setMealType={setMealType}
        />
        <NewCheckbox 
          x="Lunch" 
          mealType={mealType} 
          setMealType={setMealType}
        />
        <NewCheckbox 
          x="Dinner" 
          mealType={mealType} 
          setMealType={setMealType}
        />
        <NewCheckbox 
          x="Dessert" 
          mealType={mealType} 
          setMealType={setMealType}
        />
        <NewCheckbox 
          x="Drink" 
          mealType={mealType} 
          setMealType={setMealType}
        />
      </div>
    </div>
  );
}