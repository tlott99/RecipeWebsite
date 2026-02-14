"use server";
import { prisma } from "@/lib/prisma";

export async function createRecipe(data) {
  try {
    console.log("Running nested query...");
    const nowTime = new Date();
    console.log(data);
    const newRecipe = await prisma.recipes.create({
      data: {
        title: data.title,
        slug: data.slug,
        private_recipe: data.privacy,
        prep_time: data.prepTime,
        cook_time: data.cookTime,
        created_at: nowTime,
        meal_type: data.mealType.checkedMeal,

        recipe_ingredients: {
          create: data.ingredients.map((ing) => {
            const cleanName = ing.ingredient.toLowerCase().trim();
            return{
              measurement_type: ing.measurement,
              amount: ing.amount,
              created_at: nowTime,
              all_ingredients: {
                  connectOrCreate: {
                      where: { name: cleanName }, 
                      create: { 
                        name: cleanName,
                        created_at: nowTime,
                        type: ing.ingredientType,
                      }
                  }
              }
            };
          })
        },
        instructions: {
          create: data.instructions.map(ins => ({
            instruction_text: ins.instruction,
            created_at: nowTime,
          }))
        }
      },
    });

    return { success: true, id: newRecipe.id };
  } catch (error) {
    console.error("Prisma Error:", error);
    return { success: false, error: error.message };
  }
}