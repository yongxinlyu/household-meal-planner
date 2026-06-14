"use client";

import { useState } from "react";
import AddRecipeForm from "@/components/AddRecipeForm";

export default function AddRecipeModal() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
      >
        Add recipe
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="max-w-2xl w-full rounded-2xl bg-white p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Add recipe</h3>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-slate-500 hover:text-slate-700"
              >
                ✕
              </button>
            </div>

            <div className="mt-4">
              <AddRecipeForm
                onSuccess={() => setOpen(false)}
                onCancel={() => setOpen(false)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
