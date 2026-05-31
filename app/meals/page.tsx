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

      <section className="rounded-3xl border border-dashed border-slate-300 bg-white p-6 text-center">
        <p className="text-lg font-semibold text-slate-900">
          No meals yet
        </p>
        <p className="mt-2 text-sm text-slate-600">
          Soon you’ll be able to add meals and ingredients here.
        </p>
      </section>
    </main>
  );
}