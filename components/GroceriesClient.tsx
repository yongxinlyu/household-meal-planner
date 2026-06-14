"use client";

import { GroceryCategory } from "@/components/GroceryCategory";
import type { MealPlanItem } from "@/data/mealPlan";
import type { Meal } from "@/data/meals";
import {
  generateGroceryList,
  groupGroceriesByCategory,
} from "@/lib/grocery";

type GroceriesClientProps = {
  initialPlanItems: MealPlanItem[];
  meals: Meal[];
};

export function GroceriesClient({
  initialPlanItems,
  meals,
}: GroceriesClientProps) {
  const groceryItems = generateGroceryList(initialPlanItems, meals);
  const groupedGroceries = groupGroceriesByCategory(groceryItems);

  return (
    <main className="space-y-6">
      <section>
        <p className="text-lg font-semibold text-emerald-700">Shopping mode</p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-950">
          Groceries
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Generated from this week&apos;s planned meals.
        </p>
      </section>

      {groceryItems.length === 0 ? (
        <section className="rounded-3xl border border-dashed border-slate-300 bg-white p-6 text-center">
          <p className="text-4xl">🛒</p>
          <h2 className="mt-4 text-lg font-semibold text-slate-950">
            No groceries yet
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Add meals to your weekly plan and the grocery list will appear here.
          </p>
        </section>
      ) : (
        <>
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
        </>
      )}
    </main>
  );
}