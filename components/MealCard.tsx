import Link from "next/link";
import type { Meal } from "@/data/meals";

type MealCardProps = {
  meal: Meal;
};

export function MealCard({ meal }: MealCardProps) {
  return (
    <Link
      href={`/meals/${meal.id}`}
      className="block rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:bg-slate-50"
    >
      <article>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-950">
              {meal.name}
            </h2>

            <p className="mt-1 text-sm text-slate-600">
              Serves {meal.defaultServings} · Cook: {meal.defaultCook}
            </p>
          </div>

          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
            {meal.ingredients.length} items
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
            {meal.style}
          </span>

          {meal.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>

      </article>
    </Link>
  );
}