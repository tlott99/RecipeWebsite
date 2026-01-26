// src/app/page.js
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Page() {
  // 1. Fetch data from the database
  const items = await prisma.recipes.findMany();

  return (
    <div className="col-span-6 px-4 md:px-8 pb-12">
      {/* --- Home Content Section --- */}
      <section className="mb-16">
        <h2 className="text-3xl font-medium text-center mt-12 mb-8 flex justify-center">
          Welcome to PutRecipeHere()
        </h2>
        
        <p className="text-base text-center mb-4 leading-relaxed max-w-4xl mx-auto">
          As I was searching for what to do my project on I was talking with my brother Derek. 
          One of his goals was to write a cookbook. I enjoy cooking and it was one of the topics 
          that I was thinking of doing my project on. I looked at different websites for ways to 
          record a recipe and only found one site and it took about 15 minutes to find the place 
          to record a recipe. I decided to create my own place to put these recipes and I've 
          had multiple people ask for the website so they can do the same thing.
        </p>

        <p className="text-base text-center mt-12">
          If you would like to see my code just click on the button below
        </p>

        <div className="flex justify-center mt-4">
          <a 
            href="https://github.com/tlott99/RecipeWebsite"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded shadow transition-colors inline-block"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* --- Database Items Section --- */}
      <section className="max-w-4xl mx-auto">
        <hr className="mb-12 border-gray-200" />
        <h3 className="text-2xl font-bold mb-6 text-center">My Database Items</h3>
        
        {items.length === 0 ? (
          <p className="text-center text-gray-500 italic">No recipes found in the database.</p>
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2">
            {items.map((item) => (
              <li key={item.id} className="p-4 border border-gray-200 rounded shadow-sm hover:shadow-md transition-shadow bg-white">
                <span className="font-semibold text-blue-600">{item.name}</span>
                {/* If you want to link to the display page using the slug: */}
                {item.slug && (
                  <Link href={`/RecipeDisplay/${item.slug}`} className="block text-sm text-gray-500 hover:underline mt-1">
                    View Recipe →
                  </Link>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}