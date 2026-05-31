export default function GroceriesPage() {
  return (
    <main className="space-y-6">
      <section>
        <p className="text-sm font-medium text-emerald-700">Shopping mode</p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-950">
          Groceries
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Your grocery list will be generated from planned meals.
        </p>
      </section>

      <section className="rounded-3xl border border-dashed border-slate-300 bg-white p-6 text-center">
        <p className="text-lg font-semibold text-slate-900">
          Grocery list is empty
        </p>
        <p className="mt-2 text-sm text-slate-600">
          Plan meals first, then ingredients will appear here.
        </p>
      </section>
    </main>
  );
}