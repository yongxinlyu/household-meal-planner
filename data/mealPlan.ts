export type MealSlot = "Lunch" | "Dinner";

export type MealPlanItem = {
  id: string;
  day: string;
  slot: MealSlot;
  mealId: string;
  cook: "You" | "Partner" | "Either";
};

export const mealPlanItems: MealPlanItem[] = [
  {
    id: "mon-dinner",
    day: "Monday",
    slot: "Dinner",
    mealId: "chicken-curry",
    cook: "Partner",
  },
  {
    id: "tue-lunch",
    day: "Tuesday",
    slot: "Lunch",
    mealId: "tuna-salad",
    cook: "You",
  },
  {
    id: "wed-dinner",
    day: "Wednesday",
    slot: "Dinner",
    mealId: "tomato-pasta",
    cook: "Either",
  },
];