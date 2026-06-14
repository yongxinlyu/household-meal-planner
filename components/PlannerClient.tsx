"use client";

import { useState } from "react";
import { DayPlanCard } from "@/components/DayPlanCard";
import type { MealPlanItem, MealSlot } from "@/data/mealPlan";
import type { Meal } from "@/data/meals";
import {
  deleteAllMealPlanItems,
  deleteMealPlanItem,
  upsertMealPlanItem,
} from "@/lib/supabase-plan";

type PlannerClientProps = {
  days: string[];
  initialPlanItems: MealPlanItem[];
  meals: Meal[];
};

export function PlannerClient({
  days,
  initialPlanItems,
  meals,
}: PlannerClientProps) {
  const [planItems, setPlanItems] = useState<MealPlanItem[]>(initialPlanItems);

  async function updatePlanItem(day: string, slot: MealSlot, mealId: string) {
    setPlanItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.day === day && item.slot === slot,
      );

      if (!mealId) {
        return currentItems.filter(
          (item) => !(item.day === day && item.slot === slot),
        );
      }

      const selectedMeal = meals.find((meal) => meal.id === mealId);

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === existingItem.id
            ? {
                ...item,
                mealId,
                cook: selectedMeal?.defaultCook ?? item.cook,
              }
            : item,
        );
      }

      return [
        ...currentItems,
        {
          id: `${day.toLowerCase()}-${slot.toLowerCase()}`,
          day,
          slot,
          mealId,
          cook: selectedMeal?.defaultCook ?? "Yongxin",
        },
      ];
    });

    try {
      if (!mealId) {
        await deleteMealPlanItem(day, slot);
      } else {
        await upsertMealPlanItem(day, slot, mealId);
      }
    } catch (error) {
      alert("Failed to save meal plan item. Check the browser console.");
      console.error("Failed to save meal plan item:", error);
    }
  }

  async function resetPlanner() {
    setPlanItems([]);

    try {
      await deleteAllMealPlanItems();
    } catch (error) {
      alert("Failed to reset the meal planner. Check the browser console.");
      console.error("Failed to reset meal planner:", error);
    }
  }

  return (
    <main className="space-y-6">
      <section>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-lg font-semibold text-emerald-700">This week</p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-950">
              Meal Planner
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              Plan meals and build your grocery list.
            </p>
          </div>

          <button
            type="button"
            onClick={resetPlanner}
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
          >
            Reset planner
          </button>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-3">
        <div className="rounded-3xl bg-emerald-50 p-5">
          <p className="text-2xl font-bold text-emerald-900">
            {planItems.length}
          </p>
          <p className="mt-1 text-sm text-emerald-800">Meals planned</p>
        </div>

        <div className="rounded-3xl bg-orange-50 p-5">
          <p className="text-2xl font-bold text-orange-900">
            {new Set(planItems.map((item) => item.day)).size}
          </p>
          <p className="mt-1 text-sm text-orange-800">Cooking days</p>
        </div>
      </section>

      <section className="space-y-4">
        {days.map((day) => (
          <DayPlanCard
            key={day}
            day={day}
            meals={meals}
            planItems={planItems.filter((item) => item.day === day)}
            onMealChange={updatePlanItem}
          />
        ))}
      </section>
    </main>
  );
}