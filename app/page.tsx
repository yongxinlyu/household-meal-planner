import { DayPlanCard } from "@/components/DayPlanCard";
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
    <main className="space-y-6">
      <section>
        <p className="text-sm font-medium text-emerald-700">This week</p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-950">
          Meal Planner
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Plan meals, assign cooking, and build your grocery list.
        </p>
      </section>

      <section className="grid grid-cols-2 gap-3">
        <div className="rounded-3xl bg-emerald-50 p-5">
          <p className="text-2xl font-bold text-emerald-900">
            {mealPlanItems.length}
          </p>
          <p className="mt-1 text-sm text-emerald-800">Meals planned</p>
        </div>

        <div className="rounded-3xl bg-orange-50 p-5">
          <p className="text-2xl font-bold text-orange-900">3</p>
          <p className="mt-1 text-sm text-orange-800">Cooking days</p>
        </div>
      </section>

      <section className="space-y-4">
        {days.map((day) => (
          <DayPlanCard
            key={day}
            day={day}
            meals={meals}
            planItems={mealPlanItems.filter((item) => item.day === day)}
          />
        ))}
      </section>
    </main>
  );
}