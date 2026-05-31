import { GroceryCategory } from "@/components/GroceryCategory";
import { mealPlanItems } from "@/data/mealPlan";
import { meals } from "@/data/meals";
import {
  generateGroceryList,
  groupGroceriesByCategory,
} from "@/lib/grocery";

export default function GroceriesPage() {
  const groceryItems = generateGroceryList(mealPlanItems, meals);
  const groupedGroceries = groupGroceriesByCategory(groceryItems);

  return (
    <main className="space-y-6">
      <section>
        <p className="text-sm font-medium text-emerald-700">Shopping mode</p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-950">
          Groceries
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Generated from this week&apos;s planned meals.
        </p>
      </section>

      <section className="rounded-3xl bg-orange-50 p-5">
        <p className="text-2xl font-bold text-orange-900">
          {groceryItems.length}
        </p>
        <p className="mt-1 text-sm text-orange-800">Items to buy</p>
      </section>

      <section className="space-y-4">
        {Object.entries(groupedGroceries).map(([category, items]) => (
          <GroceryCategory
            key={category}
            category={category}
            items={items}
          />
        ))}
      </section>
    </main>
  );
}