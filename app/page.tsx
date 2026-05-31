import { PlannerClient } from "@/components/PlannerClient";
import { getMeals } from "@/lib/supabase-meals";
import { getMealPlanItems } from "@/lib/supabase-plan";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default async function HomePage() {
  const meals = await getMeals();
  const mealPlanItems = await getMealPlanItems();

  return (
    <PlannerClient
      days={days}
      initialPlanItems={mealPlanItems}
      meals={meals}
    />
  );
}