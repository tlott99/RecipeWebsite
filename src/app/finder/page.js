// app/recipe-finder/page.js
import { prisma } from "@/lib/prisma";
import RecipeFinderClient from "./RecipeFinderClient";

export default async function RecipeFinderPage() {
  // 1. Fetch random recipes
  const rawRecipes = await prisma.$queryRaw`
    SELECT * FROM "recipe_management"."recipes" ORDER BY RANDOM() LIMIT 15
  `;

  // 2. IMPORTANT: Serialize the data
  // This converts Decimals to Strings and ensures the array is clean
  // and compatible with the "use client" component.
  const initialRecipes = JSON.parse(JSON.stringify(rawRecipes));

  return (
    <main className="p-8">
      {/* 3. Add a fallback to prevent "undefined" errors in the client */}
      <RecipeFinderClient initialRecipes={initialRecipes || []} />
    </main>
  );
}