import { PlannerClient } from "@/components/PlannerClient";
import { mealPlanItems } from "@/data/mealPlan";
import { meals } from "@/data/meals";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function HomePage() {
  return (
    <PlannerClient
      days={days}
      initialPlanItems={mealPlanItems}
      meals={meals}
    />
  );
}