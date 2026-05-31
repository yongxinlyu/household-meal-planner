import type { Meal } from "@/data/meals";
import type { MealPlanItem } from "@/data/mealPlan";

type DayPlanCardProps = {
  day: string;
  planItems: MealPlanItem[];
  meals: Meal[];
};

export function DayPlanCard({ day, planItems, meals }: DayPlanCardProps) {
  const lunch = planItems.find((item) => item.slot === "Lunch");
  const dinner = planItems.find((item) => item.slot === "Dinner");

  function getMealName(mealId?: string) {
    if (!mealId) return "Not planned";
    return meals.find((meal) => meal.id === mealId)?.name ?? "Unknown meal";
  }

  function getCook(mealId?: string, cook?: string) {
    if (!mealId) return "";
    return `Cook: ${cook}`;
  }

  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-950">{day}</h2>

      <div className="mt-4 space-y-3">
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Lunch
          </p>
          <p className="mt-1 font-medium text-slate-900">
            {getMealName(lunch?.mealId)}
          </p>
          {lunch && (
            <p className="mt-1 text-sm text-slate-500">
              {getCook(lunch.mealId, lunch.cook)}
            </p>
          )}
        </div>

        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Dinner
          </p>
          <p className="mt-1 font-medium text-slate-900">
            {getMealName(dinner?.mealId)}
          </p>
          {dinner && (
            <p className="mt-1 text-sm text-slate-500">
              {getCook(dinner.mealId, dinner.cook)}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}