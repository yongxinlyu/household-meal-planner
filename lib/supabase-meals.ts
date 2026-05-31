import { supabase } from "@/lib/supabase";
import type { Meal } from "@/data/meals";

type MealRow = {
  id: string;
  name: string;
  default_cook: "You" | "Partner" | "Either";
  default_servings: number;
  tags: string[];
  meal_ingredients: {
    name: string;
    quantity: number;
    unit: string;
    category: Meal["ingredients"][number]["category"];
  }[];
};

export async function getMeals(): Promise<Meal[]> {
  const { data, error } = await supabase
    .from("meals")
    .select(
      `
      id,
      name,
      default_cook,
      default_servings,
      tags,
      meal_ingredients (
        name,
        quantity,
        unit,
        category
      )
    `,
    )
    .order("name");

  if (error) {
    console.error("Error loading meals:", error);
    return [];
  }

  return ((data ?? []) as MealRow[]).map((meal) => ({
    id: meal.id,
    name: meal.name,
    defaultCook: meal.default_cook,
    defaultServings: meal.default_servings,
    tags: meal.tags,
    ingredients: meal.meal_ingredients.map((ingredient) => ({
      name: ingredient.name,
      quantity: Number(ingredient.quantity),
      unit: ingredient.unit,
      category: ingredient.category,
    })),
  }));
}

export async function getMealById(mealId: string): Promise<Meal | null> {
  const meals = await getMeals();
  return meals.find((meal) => meal.id === mealId) ?? null;
}