export default function SettingsPage() {
  return (
    <main className="space-y-6">
      <section>
        <p className="text-sm font-medium text-emerald-700">Household</p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-950">
          Settings
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Configure household members and preferences.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-950">Members</h2>

        <div className="mt-4 space-y-3">
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="font-medium text-slate-900">Yongxin</p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="font-medium text-slate-900">Sa</p>
          </div>
        </div>
      </section>
    </main>
  );
}