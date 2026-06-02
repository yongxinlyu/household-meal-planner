export const dynamic = "force-dynamic";

import { GroceriesClient } from "@/components/GroceriesClient";
import { getMeals } from "@/lib/supabase-meals";
import { getMealPlanItems } from "@/lib/supabase-plan";

export default async function GroceriesPage() {
  const meals = await getMeals();
  const mealPlanItems = await getMealPlanItems();

  return <GroceriesClient initialPlanItems={mealPlanItems} meals={meals} />;
}