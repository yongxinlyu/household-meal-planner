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

      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-950">Today</h2>

        <div className="mt-4 space-y-3">
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Lunch
            </p>
            <p className="mt-1 font-medium text-slate-900">Not planned yet</p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Dinner
            </p>
            <p className="mt-1 font-medium text-slate-900">Not planned yet</p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-3">
        <div className="rounded-3xl bg-emerald-50 p-5">
          <p className="text-2xl font-bold text-emerald-900">0</p>
          <p className="mt-1 text-sm text-emerald-800">Meals planned</p>
        </div>

        <div className="rounded-3xl bg-orange-50 p-5">
          <p className="text-2xl font-bold text-orange-900">0</p>
          <p className="mt-1 text-sm text-orange-800">Grocery items</p>
        </div>
      </section>
    </main>
  );
}