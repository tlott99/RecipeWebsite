import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import PrintButton from "./PrintButton"; // Ensure this is in the same folder

export default async function RecipeDisplay({ params }) {
  const { id } = await params;
  const numericId = parseInt(id, 10);

  // 1. Fetch from Neon using the numeric ID
const recipe = await prisma.recipes.findUnique({
  where: { id: numericId },
  include: {
    // This pulls from the 'instructions' table
    instructions: {
      orderBy: { instruction_number: 'asc' } // Optional: keeps instructions in order
    },
    // This pulls from 'recipe_ingredients'
    recipe_ingredients: {
      include: {
        // This "hops" from recipe_ingredients to 'all_ingredients' 
        // to get the actual name/details of the ingredient
        all_ingredients: true 
      }
    }
  }
});

  if (!recipe) {
    notFound();
  }
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white shadow-sm rounded-lg border border-gray-100 overflow-hidden">
        
        {/* Header */}
        <div className="text-center p-6 border-b border-gray-100">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">{recipe.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm border-t border-gray-50 pt-6">
            <div className="flex flex-col">
              <span className="font-semibold text-gray-400 uppercase text-xs">Meal Type</span>
              <p className="text-gray-800">{recipe.meal_type || "N/A"}</p>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-400 uppercase text-xs">Prep</span>
              <p className="text-gray-800">{recipe.prep_time}m</p>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-400 uppercase text-xs">Cook</span>
              <p className="text-gray-800">{recipe.cook_time}m</p>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-400 uppercase text-xs">Servings</span>
              <p className="text-gray-800">{recipe.servingSize}</p>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-400 uppercase text-xs">Privacy</span>
              <p className="text-gray-800 capitalize">{recipe.recipePrivacy}</p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 md:p-10 space-y-10 text-left">
          <section>
            <h3 className="text-xl font-bold text-gray-800 pl-4 mb-4">Description</h3>
            <p className="text-gray-600 italic leading-relaxed pl-5">{recipe.description}</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-800 pl-4 mb-4">Ingredients</h3>
            <div className="pl-5 space-y-2">
              {recipe.recipe_ingredients.map((ri) => (
                <p key={ri.id}>
                  {/* 1. Convert Decimal to String. 2. Handle potential nulls */}
                  • {ri.amount?.toString()} {ri.measurement_type || ""} {ri.all_ingredients?.name}
                </p>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-800 pl-4 mb-4">Instructions</h3>
            <div className="pl-5 space-y-4">
              {recipe.instructions.map((step, index) => (
                <p key={step.id}>
                  <span className="font-bold">{index + 1}.</span> {step.instruction_text}
                </p>
              ))}
            </div>
          </section>
        </div>

        <div className="bg-gray-50 p-6 text-center border-t border-gray-100">
          <PrintButton slug={recipe.slug} />
        </div>
      </div>
    </div>
  );
}