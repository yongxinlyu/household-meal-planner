"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import type { IngredientCategory, Cook } from "@/data/meals";

type IngredientRow = {
  name: string;
  quantity: number;
  unit: string;
  category: IngredientCategory;
};

export default function AddRecipeForm({
  onSuccess,
  onCancel,
}: {
  onSuccess?: () => void;
  onCancel?: () => void;
}) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [defaultCook, setDefaultCook] = useState<Cook>("Yongxin");
  const [style, setStyle] = useState("");
  const [defaultServings, setDefaultServings] = useState(2);
  const [tags, setTags] = useState("");
  const [ingredients, setIngredients] = useState<IngredientRow[]>([
    { name: "", quantity: 1, unit: "", category: "Other" },
  ]);
  const [saving, setSaving] = useState(false);

  function updateIngredient(index: number, patch: Partial<IngredientRow>) {
    setIngredients((prev) =>
      prev.map((row, i) => (i === index ? { ...row, ...patch } : row)),
    );
  }

  function addIngredient() {
    setIngredients((prev) => [
      ...prev,
      { name: "", quantity: 1, unit: "", category: "Other" },
    ]);
  }

  function removeIngredient(index: number) {
    setIngredients((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();

    if (!name.trim()) {
      alert("Please provide a name for the recipe.");
      return;
    }

    if (ingredients.length === 0 || ingredients.some((i) => !i.name.trim())) {
      alert("Please add at least one ingredient with a name.");
      return;
    }

    setSaving(true);

    try {
      const mealId = crypto.randomUUID();

      const mealPayload = {
        id: mealId,
        name,
        default_cook: defaultCook,
        style,
        default_servings: defaultServings,
        tags: tags ? tags.split(",").map((t) => t.trim()).filter(Boolean) : [],
      };

      const { data: mealData, error: mealError } = await supabase
        .from("meals")
        .insert([mealPayload])
        .select()
        .single();

      if (mealError || !mealData) {
        throw mealError ?? new Error("Failed to create meal");
      }

      const ingredientInserts = ingredients.map((ing) => ({
        meal_id: mealId,
        name: ing.name,
        quantity: ing.quantity,
        unit: ing.unit,
        category: ing.category,
      }));

      const { error: ingError } = await supabase
        .from("meal_ingredients")
        .insert(ingredientInserts);

      if (ingError) {
        throw ingError;
      }

      onSuccess?.();
      router.push(`/meals/${mealId}`);
    } catch (error) {
      console.error("Failed to create recipe:", error);
      alert("Failed to create recipe. Check the console for details.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-700">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2"
        />
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div>
          <label className="block text-sm font-medium text-slate-700">Cook</label>
          <select
            value={defaultCook}
            onChange={(e) => setDefaultCook(e.target.value as Cook)}
            className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2"
          >
            <option value="Yongxin">Yongxin</option>
            <option value="Sa">Sa</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">Style</label>
          <input
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">Serves</label>
          <input
            type="number"
            min={1}
            value={defaultServings}
            onChange={(e) => setDefaultServings(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">Tags (comma separated)</label>
        <input
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">Ingredients</label>
        <div className="mt-2 space-y-2">
          {ingredients.map((ing, idx) => (
            <div key={idx} className="grid grid-cols-6 gap-2 items-center">
              <input
                placeholder="Name"
                value={ing.name}
                onChange={(e) => updateIngredient(idx, { name: e.target.value })}
                className="col-span-2 rounded-xl border border-slate-200 px-3 py-2"
              />

              <input
                type="number"
                min={0}
                value={ing.quantity}
                onChange={(e) => updateIngredient(idx, { quantity: Number(e.target.value) })}
                className="rounded-xl border border-slate-200 px-3 py-2"
              />

              <input
                placeholder="Unit"
                value={ing.unit}
                onChange={(e) => updateIngredient(idx, { unit: e.target.value })}
                className="rounded-xl border border-slate-200 px-3 py-2"
              />

              <select
                value={ing.category}
                onChange={(e) => updateIngredient(idx, { category: e.target.value as IngredientCategory })}
                className="rounded-xl border border-slate-200 px-3 py-2"
              >
                <option>Produce</option>
                <option>Meat</option>
                <option>Pantry</option>
                <option>Dairy</option>
                <option>Frozen</option>
                <option>Other</option>
              </select>

              <button
                type="button"
                onClick={() => removeIngredient(idx)}
                className="text-sm text-red-600"
              >
                Remove
              </button>
            </div>
          ))}

          <div>
            <button type="button" onClick={addIngredient} className="rounded-md bg-slate-100 px-3 py-2 text-sm">
              + Add ingredient
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end gap-3">
        <button type="button" onClick={onCancel} className="text-sm text-slate-600">
          Cancel
        </button>
        <button
          type="submit"
          disabled={saving}
          className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white disabled:opacity-60"
        >
          {saving ? "Saving..." : "Create recipe"}
        </button>
      </div>
    </form>
  );
}
