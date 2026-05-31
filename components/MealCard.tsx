import type { Meal } from "@/data/meals";

type MealCardProps = {
  meal: Meal;
};

export function MealCard({ meal }: MealCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
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
        {meal.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-4 border-t border-slate-100 pt-4">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
          Ingredients
        </p>

        <ul className="mt-2 space-y-1 text-sm text-slate-700">
          {meal.ingredients.slice(0, 3).map((ingredient) => (
            <li key={ingredient.name}>
              {ingredient.name}{" "}
              <span className="text-slate-400">
                {ingredient.quantity} {ingredient.unit}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}