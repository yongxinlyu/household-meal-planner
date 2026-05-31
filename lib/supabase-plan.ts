import { supabase } from "@/lib/supabase";
import type { MealPlanItem, MealSlot } from "@/data/mealPlan";

type MealPlanRow = {
  id: string;
  day: string;
  slot: MealSlot;
  meal_id: string;
};

export async function getMealPlanItems(): Promise<MealPlanItem[]> {
  const { data, error } = await supabase
    .from("meal_plan_items")
    .select("id, day, slot, meal_id")
    .order("id");

  if (error) {
    console.error("Error loading meal plan:", error);
    return [];
  }

  return ((data ?? []) as MealPlanRow[]).map((item) => ({
    id: item.id,
    day: item.day,
    slot: item.slot,
    mealId: item.meal_id,
    cook: "Either",
  }));
}

export async function upsertMealPlanItem(
  day: string,
  slot: MealSlot,
  mealId: string,
) {
  const id = `${day.slice(0, 3).toLowerCase()}-${slot.toLowerCase()}`;

  const { data, error } = await supabase
    .from("meal_plan_items")
    .upsert(
      {
        id,
        day,
        slot,
        meal_id: mealId,
      },
      {
        onConflict: "id",
      },
    )
    .select();

  console.log("Supabase upsert result:", { data, error });

  if (error) {
    throw error;
  }
}

export async function deleteMealPlanItem(day: string, slot: MealSlot) {
  const id = `${day.slice(0, 3).toLowerCase()}-${slot.toLowerCase()}`;

  const { error } = await supabase.from("meal_plan_items").delete().eq("id", id);

  if (error) {
    throw error;
  }
}