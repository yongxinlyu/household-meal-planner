import type { Cook } from "@/data/meals";

export type MealSlot = "Lunch" | "Dinner";

export type MealPlanItem = {
  id: string;
  day: string;
  slot: MealSlot;
  mealId: string;
  cook: Cook;
};