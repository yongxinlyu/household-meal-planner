export type MealSlot = "Lunch" | "Dinner";

export type MealPlanItem = {
  id: string;
  day: string;
  slot: MealSlot;
  mealId: string;
  cook: "Yongxin" | "Sa" ;
};

export const mealPlanItems: MealPlanItem[] = [
  {
    id: "monday-dinner",
    day: "Monday",
    slot: "Dinner",
    mealId: "chicken-curry",
    cook: "Sa",
  },
  {
    id: "tuesday-lunch",
    day: "Tuesday",
    slot: "Lunch",
    mealId: "tuna-salad",
    cook: "Yongxin",
  },
  {
    id: "wednesday-dinner",
    day: "Wednesday",
    slot: "Dinner",
    mealId: "tomato-pasta",
    cook: "Sa",
  },
];