export const dynamic = "force-dynamic";

import { GroceriesClient } from "@/components/GroceriesClient";
import { mealPlanItems } from "@/data/mealPlan";
import { meals } from "@/data/meals";

export default function GroceriesPage() {
  return <GroceriesClient initialPlanItems={mealPlanItems} meals={meals} />;
}