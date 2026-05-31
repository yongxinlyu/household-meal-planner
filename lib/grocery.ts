import type { MealPlanItem } from "@/data/mealPlan";
import type { Ingredient, Meal } from "@/data/meals";

export type GroceryItem = Ingredient & {
  key: string;
};

export function generateGroceryList(
  planItems: MealPlanItem[],
  meals: Meal[],
): GroceryItem[] {
  const groceryMap = new Map<string, GroceryItem>();

  for (const planItem of planItems) {
    const meal = meals.find((item) => item.id === planItem.mealId);

    if (!meal) continue;

    for (const ingredient of meal.ingredients) {
      const key = `${ingredient.name.toLowerCase()}-${ingredient.unit.toLowerCase()}`;

      const existingItem = groceryMap.get(key);

      if (existingItem) {
        existingItem.quantity += ingredient.quantity;
      } else {
        groceryMap.set(key, {
          ...ingredient,
          key,
        });
      }
    }
  }

  return Array.from(groceryMap.values()).sort((a, b) =>
    a.category.localeCompare(b.category),
  );
}

export function groupGroceriesByCategory(items: GroceryItem[]) {
  return items.reduce<Record<string, GroceryItem[]>>((groups, item) => {
    if (!groups[item.category]) {
      groups[item.category] = [];
    }

    groups[item.category].push(item);
    return groups;
  }, {});
}