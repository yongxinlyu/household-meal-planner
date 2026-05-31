import { MealCard } from "@/components/MealCard";
import { meals } from "@/data/meals";

export default function MealsPage() {
  return (
    <main className="space-y-6">
      <section>
        <p className="text-sm font-medium text-emerald-700">Meal library</p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-950">
          Meals
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Save meals your household cooks often.
        </p>
      </section>

      <section className="space-y-4">
        {meals.map((meal) => (
          <MealCard key={meal.id} meal={meal} />
        ))}
      </section>
    </main>
  );
}