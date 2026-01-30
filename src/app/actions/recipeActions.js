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

        recipe_ingredients: {
          create: data.ingredients.map(ing => ({
            measurement_type: ing.measurement,
            amount: ing.amount,
            all_ingredients: {
                connectOrCreate: {
                    where: { name: ing.ingredient }, 
                    create: { name: ing.ingredient }
                }
            }
          })) // Expects [{ name: '...', amount: '...' }]
        },
        // instructions: {
        //   create: data.instructions.map(ins => ({
        //     name: ins.name,
        //     amount: ins.amount,
        //   })) // Expects [{ step: '...', order: 1 }]
        // }
      },
    });

    return { success: true, id: newRecipe.id };
  } catch (error) {
    console.error("Prisma Error:", error);
    return { success: false, error: error.message };
  }
}