import type { GroceryItem } from "@/lib/grocery";

type GroceryCategoryProps = {
  category: string;
  items: GroceryItem[];
};

export function GroceryCategory({ category, items }: GroceryCategoryProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-950">{category}</h2>

      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <label
            key={item.key}
            className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4"
          >
            <input
              type="checkbox"
              className="h-5 w-5 rounded border-slate-300"
            />

            <span className="flex-1 text-sm font-medium text-slate-900">
              {item.name}
            </span>

            <span className="text-sm text-slate-500">
              {item.quantity} {item.unit}
            </span>
          </label>
        ))}
      </div>
    </section>
  );
}