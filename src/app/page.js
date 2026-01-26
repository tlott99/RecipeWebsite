import { prisma } from "@/lib/prisma"; // Using that alias we set up!

export default async function Page() {
  // Query your database directly! 
  // Replace 'recipe' with whatever table name Prisma generated for you
  const items = await prisma.recipes.findMany(); 

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">My Database Items</h1>
      <ul className="grid gap-4">
        {items.map((item) => (
          <li key={item.id} className="p-4 border rounded shadow-sm">
            {item.name}
          </li>
        ))}
      </ul>
    </main>
  );
}