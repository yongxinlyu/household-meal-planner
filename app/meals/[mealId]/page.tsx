import Link from "next/link";
import { notFound } from "next/navigation";
import { meals } from "@/data/meals";

type MealDetailsPageProps = {
  params: Promise<{
    mealId: string;
  }>;
};

export default async function MealDetailsPage({
  params,
}: MealDetailsPageProps) {
  const { mealId } = await params;

  const meal = meals.find((item) => item.id === mealId);

  if (!meal) {
    notFound();
  }

  return (
    <main className="space-y-6">
      <Link href="/meals" className="text-sm font-medium text-emerald-700">
        ← Back to meals
      </Link>

      <section>
        <p className="text-sm font-medium text-emerald-700">Meal details</p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-950">
          {meal.name}
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Serves {meal.defaultServings} · Cook: {meal.defaultCook}
        </p>
      </section>

      <section className="flex flex-wrap gap-2">
        {meal.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
          >
            {tag}
          </span>
        ))}
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-950">Ingredients</h2>

        <ul className="mt-4 divide-y divide-slate-100">
          {meal.ingredients.map((ingredient) => (
            <li
              key={`${ingredient.name}-${ingredient.unit}`}
              className="flex items-center justify-between gap-4 py-3"
            >
              <div>
                <p className="font-medium text-slate-900">
                  {ingredient.name}
                </p>
                <p className="text-sm text-slate-500">
                  {ingredient.category}
                </p>
              </div>

              <p className="text-sm font-medium text-slate-700">
                {ingredient.quantity} {ingredient.unit}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}