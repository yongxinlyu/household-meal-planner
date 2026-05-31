import type { Meal } from "@/data/meals";
import type { MealPlanItem, MealSlot } from "@/data/mealPlan";

type DayPlanCardProps = {
  day: string;
  planItems: MealPlanItem[];
  meals: Meal[];
  onMealChange?: (day: string, slot: MealSlot, mealId: string) => void;
};

export function DayPlanCard({
  day,
  planItems,
  meals,
  onMealChange,
}: DayPlanCardProps) {
  const lunch = planItems.find((item) => item.slot === "Lunch");
  const dinner = planItems.find((item) => item.slot === "Dinner");

  function getMealName(mealId?: string) {
    if (!mealId) return "Not planned";
    return meals.find((meal) => meal.id === mealId)?.name ?? "Unknown meal";
  }

  function renderSlot(slot: MealSlot, planItem?: MealPlanItem) {
    return (
      <div className="rounded-2xl bg-slate-50 p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
          {slot}
        </p>

        {onMealChange ? (
          <select
            value={planItem?.mealId ?? ""}
            onChange={(event) => onMealChange(day, slot, event.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm font-medium text-slate-900"
          >
            <option value="">Not planned</option>
            {meals.map((meal) => (
              <option key={meal.id} value={meal.id}>
                {meal.name}
              </option>
            ))}
          </select>
        ) : (
          <p className="mt-1 font-medium text-slate-900">
            {getMealName(planItem?.mealId)}
          </p>
        )}

        {planItem && (
          <p className="mt-2 text-sm text-slate-500">
            Cook: {planItem.cook}
          </p>
        )}
      </div>
    );
  }

  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-950">{day}</h2>

      <div className="mt-4 space-y-3">
        {renderSlot("Lunch", lunch)}
        {renderSlot("Dinner", dinner)}
      </div>
    </article>
  );
}