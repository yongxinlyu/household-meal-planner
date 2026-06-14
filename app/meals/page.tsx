export const dynamic = "force-dynamic";

import { MealCard } from "@/components/MealCard";
import type { Cook, Meal } from "@/data/meals";
import { getMeals } from "@/lib/supabase-meals";

const cookOrder: Cook[] = ["Sa", "Yongxin"];

export default async function MealsPage() {
  const meals = await getMeals();

  const mealsByCook = cookOrder.map((cook) => ({
    cook,
    meals: meals
      .filter((meal) => meal.defaultCook === cook)
      .sort(
        (leftMeal, rightMeal) =>
          leftMeal.style.localeCompare(rightMeal.style) ||
          leftMeal.name.localeCompare(rightMeal.name),
      ),
  }));

  const uncategorizedMeals = meals.filter(
    (meal) => !cookOrder.includes(meal.defaultCook),
  );

  const visibleGroups = [
    ...mealsByCook,
    ...(uncategorizedMeals.length
      ? [
          {
            cook: "Other" as Cook | "Other",
            meals: uncategorizedMeals.sort(
              (leftMeal, rightMeal) =>
                leftMeal.style.localeCompare(rightMeal.style) ||
                leftMeal.name.localeCompare(rightMeal.name),
            ),
          },
        ]
      : []),
  ];

  return (
    <main className="space-y-6">
      <section>
        <p className="text-lg font-semibold text-emerald-700">Meal library</p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-950">
          Meals
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Save meals your household cooks often.
        </p>
      </section>

      <section className="space-y-6">
        {visibleGroups.map(({ cook, meals: groupMeals }) =>
          groupMeals.length ? (
            <div key={cook} className="space-y-3">
              <h2 className="text-sm font-medium uppercase tracking-wide text-slate-500">
                {cook}
              </h2>

              <div className="space-y-4">
                {groupMeals.map((meal) => (
                  <MealCard key={meal.id} meal={meal} />
                ))}
              </div>
            </div>
          ) : null,
        )}
      </section>
    </main>
  );
}